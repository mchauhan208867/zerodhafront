require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const { HoldingsModel } = require("./model/HoldingsModel");
const { PositionsModel } = require("./model/PositionsModel");
const { OrdersModel } = require("./model/OrdersModel");

const PORT = process.env.PORT || 10000;
const uri = process.env.MONGO_URL;
const JWT_SECRET = process.env.JWT_SECRET || "your_secret_key";
const app = express();

// Allow frontend to send cookies
const allowedOrigins = [
  "https://zerodhafront-eight.vercel.app",
  "https://zerodhafront-n5vn.vercel.app"
];

app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
    credentials: true, // Allow cookies & authentication headers
  })
);
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());

// **User Schema & Model**
const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

const UserModel = mongoose.model("User", userSchema);

// Simple Root API
app.get("/", (req, res) => {
  res.status(200).send("✅ Web Server is Running!");
});


app.post("/signup", async (req, res) => {
  try {
    const { username, password } = req.body;

    // Check if user already exists
    const existingUser = await UserModel.findOne({ username });
    if (existingUser) {
      return res.status(400).json({ message: "Username already exists" });
    }

    // Hash password before saving
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new UserModel({ username, password: hashedPassword });

    await newUser.save();
    res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error creating user", error });
  }
});

// **Login - Set HTTP-Only Cookie**
app.post("/login", async (req, res) => {
  try {
    const { username, password } = req.body;

    const user = await UserModel.findOne({ username });
    if (!user) return res.status(400).json({ message: "User not found" });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ message: "Invalid credentials" });

    // Generate JWT token
    const token = jwt.sign({ userId: user._id }, JWT_SECRET, { expiresIn: "1h" });

    // Set HTTP-only cookie
    res.cookie("token", token, {
      httpOnly: true, // Secure against XSS
      secure: true, // Set to `true` in production with HTTPS
      sameSite: "None",
      maxAge: 60 * 60 * 1000, // 1 hour
    });

    res.json({ success: true });
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
});

// **Logout - Clear Cookie**
app.post("/logout", (req, res) => {
  res.clearCookie("token");
  res.json({ success: true });
});

// **Middleware to Authenticate Requests**
const authenticateToken = (req, res, next) => {
  const token = req.cookies.token;
  if (!token) return res.status(401).json({ message: "Access denied" });

  jwt.verify(token, JWT_SECRET, (err, user) => {
    if (err) return res.status(403).json({ message: "Invalid token" });
    req.user = user;
    next();
  });
};

// **Check Auth Status**
app.get("/auth", (req, res) => {
  const token = req.cookies.token;
  if (!token) {
    return res.json({ authenticated: false });
  }

  jwt.verify(token, JWT_SECRET, (err, user) => {
    if (err) return res.json({ authenticated: false });
    res.json({ authenticated: true, user });
  });
});

app.get("/allHoldings", async (req, res) => { 
  let allHoldings = await HoldingsModel.find({});
  res.json(allHoldings);
});  

app.get("/allPositions" , async (req , res)=>{
  let allPositions =  await PositionsModel.find({});
  res.json(allPositions);
});

app.post("/newOrder", async (req, res) => {
  let newOrder = new OrdersModel({
    name: req.body.name,
    qty: req.body.qty,
    price: req.body.price,
    mode: req.body.mode,
  });

  newOrder.save();

  res.send("Order saved!");
});


// **Start Server**
app.listen(PORT, () => {
 console.log(`Server running on port ${PORT}`);
  mongoose.connect(uri)
    .then(() => console.log("DB Connected"))
    .catch(err => console.error("DB Connection Failed", err));
});
