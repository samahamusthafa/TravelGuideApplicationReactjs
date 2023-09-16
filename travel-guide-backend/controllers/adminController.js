export const TravelersList = async(req,res) => {
    try {
        // Fetch user data (name, email, and phone) from the users collection
        const user = await users.find({}, 'name email phone');
        res.json(user);
      } catch (error) {
        console.error('Error fetching user data:', error);
        res.status(500).json({ message: 'Internal server error' });
      }
}