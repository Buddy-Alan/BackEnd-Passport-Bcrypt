import { Router } from "express";
import passport from "passport";

const login = Router()


login.get("/register", (req, res) => {
    if (!req.isAuthenticated()) {
        const errorMensaje = req.session.messages ? req.session.messages[0] : ""
        res.render('formRegister', { error: errorMensaje })
        req.session.messages = [];
    } else {
        res.redirect("/")
    }
})

login.post("/register", passport.authenticate("singup", {
    failureRedirect: "/register",
    failureMessage: true
}), (req, res) => {
    res.redirect("/")
})

login.get("/login", async (req, res) => {
    if (!req.isAuthenticated()) {
        const errorMensaje = req.session.messages ? req.session.messages[0] : ""
        res.render("formLogin", { error: errorMensaje })
        req.session.messages = [];
    } else {
        res.redirect("/")
    }
})

login.post("/login", passport.authenticate("login", {
    failureRedirect: "/login",
    failureMessage: true
}), (req, res) => {
    res.redirect("/")
})


login.get("/logout", async (req, res) => {
    if (req.isAuthenticated()) {
        res.render("logout", { nombreUsuario: req.user.name })
    }
    else {
        res.redirect("/login")
    }
})

login.post("/logout", async (req, res) => {
    req.session.destroy()
})


export default login
