const express = require("express")
const dotenv = require("dotenv")
const cors = require("cors")
const path = require("path")

const MaincategoryRoutes = require("./routes/MaincategoryRoutes")
const SubcategoryRoutes = require("./routes/SubcategoryRoutes")
// const BrandRoutes = require("./routes/BrandRoutes")
const ProductRoutes = require("./routes/ProductRoutes")
const UserRoutes = require("./routes/UserRoutes")
const CartRoutes = require("./routes/CartRoutes")
const WishlistRoutes = require("./routes/WishlistRoutes")
const CheckoutRoutes = require("./routes/CheckoutRoutes")
const NewsletterRoutes = require("./routes/NewsletterRoutes")
const ContactRoutes = require("./routes/ContactRoutes")
const FrontendRoutes = require("./routes/FrontendRoutes")

dotenv.config()
require("./dbConnect")

const app = express()
app.use(cors())

app.use(express.json())
app.use("/public", express.static("public"))
// app.use(express.static(path.join(__dirname, 'build')));


app.use("/api/maincategory",MaincategoryRoutes)
app.use("/api/subcategory",SubcategoryRoutes)
// app.use("/api/brand",BrandRoutes)
app.use("/api/product",ProductRoutes)
app.use("/api/user",UserRoutes)
app.use("/api/cart",CartRoutes)
app.use("/api/wishlist",WishlistRoutes)
app.use("/api/checkout",CheckoutRoutes)
app.use("/api/newsletter",NewsletterRoutes)
app.use("/api/contact",ContactRoutes)
app.use("/api/frontend",FrontendRoutes)


// app.use('*', express.static(path.join(__dirname, 'build'))); 
var port = process.env.PORT||80
app.listen(port,()=>{
    console.log(`Server is Running at Port http://localhost:${port}`);
})