var mensClothingSchema = new mongoose.Schema({ 
    image: String,
    name: String,
    page_description: String,
    page_title: String,
    parent_category_id: String,
});

module.exports = mongoose.model( mensClothingSchema, 'practice');