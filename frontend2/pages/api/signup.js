const handler = async (req, res) => {

    if(req.method == "POST"){
        console.log(req.body)

        // let u = new User(req.body)
        // await u.save();

        res.status(200).json({ success: "success" })
    }
    else{
        res.status(400).json({ error: "Error"})
    }
  }

  export default handler;
  