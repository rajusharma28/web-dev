const isSets

("/user/:id") nahi used kare because cookies me parsent hota hai 


  // const people = await User.findById(req.body._id);
    // // if (!people) throw new Error("User not found");

    // if (!(req.body.emailId === people.emailId))
    //   throw new Error("Invalid Credentials");

        const people =await User.findOne({emailId:req.body.emailId});