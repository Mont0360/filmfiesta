
// // Routes
// app.post("/login", (req,res, next) => {
//     passport.authenticate("local", (err, user, info) => {
//         if (err) throw err;
//         if (!user) res.send("No User Exists");
//         else {
//             req.login(user, err => {
//                 if (err) throw err;
//                 res.send("Successfully Authenticated");
//                 console.log(req.user);
//             })
//         }
//     })(req, res, next);
// });
// app.post("/register", (req,res) => {
//     // Finds if user already exists -- Creates new user if none exist
//     User.findOne({username: req.body.username}, async (err, doc) => {
//         if (err) throw err;
//         if (doc) res.send("User Already Exists")
//         if (!doc) {
//             const hashedPassword = await bcrypt.hash(req.body.password, 10)
//             const newUser = new User ({
//                 username: req.body.username,
//                 password: hashedPassword,
//             });
//             await newUser.save();
//             res.send("User Created");
//         }
//     })
//     console.log(req.body);
// })
// app.get("/user", (req,res) => {
//     res.send(req.user); // The req.user stores the entire user that has been authenticated inside of it.
// });