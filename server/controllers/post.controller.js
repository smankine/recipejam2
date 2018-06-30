import cuid from 'cuid';
import slug from 'limax';
import sanitizeHtml from 'sanitize-html';
var request = require('request');

export function search(req, res) {
  let s = 'http://api.yummly.com/v1/api/recipes?_app_id=6faeb25c&_app_key=9f831bfa2aae088b24f64757ac73b86a&q=buttermilk%20pancake';
  request(s, function (error, response, body) {
    if (!error && response.statusCode == 200) {
      console.log(body) // Print the google web page.
      // res.json(body);

      var arr = ["https://www.dropbox.com/s/3rjo1rp5h32uip0/matchBar4.png?dl=0",
      "https://www.dropbox.com/s/j26dmhc4acugmh3/matchBar2.png?dl=0",
        "https://girlgeeksydney.slack.com/files/UB3DBA4P3/FBGHPCWQ4/matchbar1.png",
        "https://girlgeeksydney.slack.com/files/UB3DBA4P3/FBG3TN1BJ/matchbar3.png"];

      console.log("body.matches" + body.matches)
      // var i = 0;
      // body.matches.forEach(function (o) {
      //   o.barUrl = arr[i];
      //
      //   if (i > 2) {
      //     i = 0;
      //   }
      // })

      // body.
      res.send(body);
    }
  })


}


export function viewrecipe(req, res) {
  res.json({
    "yield": "12-14 pancakes",
    "totalTime": "20 min",
    "ingredients": [
      "all purpose flour",
      "sugar",
      "baking powder",
      "baking soda",
      "salt",
      "large egg",
      "butter",
      "buttermilk",
      "vanilla extract"
    ],
    "images": [
      {
        "hostedSmallUrl": "https://lh3.googleusercontent.com/CEf_pmGT8XvTsQbxP8XVwZlrE6XPUtF6Z2rTw54mZMuAOqAk0SWL-DdWzaGQdMLcr6Be8k8HRN6PiPE_KnHGnA=s90",
        "hostedMediumUrl": "https://lh3.googleusercontent.com/CEf_pmGT8XvTsQbxP8XVwZlrE6XPUtF6Z2rTw54mZMuAOqAk0SWL-DdWzaGQdMLcr6Be8k8HRN6PiPE_KnHGnA=s180",
        "hostedLargeUrl": "https://lh3.googleusercontent.com/CEf_pmGT8XvTsQbxP8XVwZlrE6XPUtF6Z2rTw54mZMuAOqAk0SWL-DdWzaGQdMLcr6Be8k8HRN6PiPE_KnHGnA=s360",
        "imageUrlsBySize": {
          "90": "https://lh3.googleusercontent.com/Cyj5qnsGrnQQ57-W7nyeQGkjBkr-mZnP3tUMIgCB_BC-PSpdxL3wqmZvncAb49ol3Oud3EYsDE2XFl8M3qfOWA=s90-c",
          "360": "https://lh3.googleusercontent.com/Cyj5qnsGrnQQ57-W7nyeQGkjBkr-mZnP3tUMIgCB_BC-PSpdxL3wqmZvncAb49ol3Oud3EYsDE2XFl8M3qfOWA=s360-c"
        }
      }
    ],

    "name": "Eggless Buttermilk Pancakes",
    "source": {
      "sourceDisplayName": "A Butterful Mind",
      "sourceSiteUrl": "abutterfulmind.com",
      "sourceRecipeUrl": "http://www.abutterfulmind.com/eggless-buttermilk-pancakes/"
    },
    "id": "Eggless-Buttermilk-Pancakes-1382130",
    "ingredientLines": [
      "2 cups all-purpose flour",
      "⅓ cup granulated sugar",
      "2 tablespoons ground flaxseed",
      "1 teaspoon baking powder",
      "½ teaspoon baking soda",
      "¼ teaspoon salt",
      "½ cup (1 stick) melted butter",
      "2 cups buttermilk",
      "2 teaspoons vanilla extract"
    ],
    "attribution": {
      "html": "<a href='http://www.yummly.co/recipe/Eggless-Buttermilk-Pancakes-1382130'>Eggless Buttermilk Pancakes recipe</a> information powered by <img alt='Yummly' src='https://static.yummly.co/api-logo.png'/>",
      "url": "http://www.yummly.co/recipe/Eggless-Buttermilk-Pancakes-1382130",
      "text": "Eggless Buttermilk Pancakes recipes: information powered by Yummly",
      "logo": "https://static.yummly.co/api-logo.png"
    },
    "numberOfServings": 6,
    "totalTimeInSeconds": 1200,
    "attributes": {
      "course": [
        "Breakfast and Brunch"
      ]
    },
    "flavors": {
      "Piquant": 0,
      "Meaty": 0.1667,
      "Bitter": 0.5,
      "Sweet": 0.5,
      "Sour": 0.1667,
      "Salty": 0.6667
    },
    "rating": 4
  });


}

export function getIncredients(req, res) {

  res.json(
    {
      "incredients": [
        {
          "name": "butter",
          "Label": "Butter",
          "picture": "https://marketplace.canva.com/MAC1K1qp_ho/1/screen/canva-butter%2C-butter-dish%2C-breakfast%2C-snack%2C-food%2C-yellow-MAC1K1qp_ho.jpg",
        },
        {
          "name": "plainFlour",
          "Label": "Plain Flour",
          "picture": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Flours.jpg/330px-Flours.jpg",
        },
        {
          "name": "salt",
          "Label": "Salt",
          "picture": "https://www.phoenixhealthfund.com.au//app/uploads/2017/10/salt.jpg",
        },
        {
          "name": "milk",
          "Label": "Milk",
          "picture": "https://marketplace.canva.com/MAC1CpbO59s/1/screen/canva-coconut-oil-with-fruit-MAC1CpbO59s.jpg",
        },
        {
          "name": "rawSugar",
          "Label": "Raw Sugar",
          "picture": "https://thesourcebulkfoods.com.au/wp-content/uploads/2013/10/Unknown-12.jpeg",
        },
        {
          "name": "brownSugar",
          "Label": "Brown Sugar",
          "picture": "http://agusthiarorganic.com/wp-content/uploads/2018/01/1-500x500.jpg",
        },
        {
          "name": "tinnedTomatoes",
          "Label": "Tinned Tomatoes",
          "picture": "https://centra.ie/thumbnail/800x800/var/files/products/own-brand/chopped_tinned_tomatoes_400g.png",
        },
        {
          "name": "pepper",
          "Label": "Pepper",
          "picture": "https://marketplace.canva.com/MACZictRzX4/1/screen/canva-pepper%2C-bell-pepper%2C-pepper-mix%2C-red-pepper%2C-seasoning-MACZictRzX4.jpg",
        },
        {
          "name": "cocoaPowder",
          "Label": "Cocoa Powder",
          "picture": "https://www.goodness.com.au/media/catalog/product/cache/1/thumbnail/9df78eab33525d08d6e5fb8d27136e95/i/m/image_127.jpg",
        },
        {
          "name": "basil",
          "Label": "Basil",
          "picture": "https://marketplace.canva.com/MACWVlexphY/1/screen/canva-basil%2C-grass%2C-spezia%2C-plant%2C-an-ingredient%2C-perfume-MACWVlexphY.jpg",
        },
        {
          "name": "cinnamon",
          "Label": "Cinnamon",
          "picture": "https://marketplace.canva.com/MACVi-3AmXY/1/screen/canva-cinnamon-stick%2C-cinnamon-powder%2C-spice%2C-flavoring-MACVi-3AmXY.jpg",
        },
        {
          "name": "selfRaisingFlour",
          "Label": "Self Raising Flour",
          "picture": "http://aucdn.ar-cdn.com/recipes/port500/6c3dbf98-c4c3-4212-add7-29bdb1aba012.jpg",
        },
        {
          "name": "cornFlour",
          "Label": "Corn Flour",
          "picture": "https://www.metrotarkari.com/pub/media/catalog/product/cache/cf3f2243ef4940fd5c66f2ff035145ac/c/o/cornflour.png",
        },
        {
          "name": "lemon",
          "Label": "Lemon",
          "picture": "https://marketplace.canva.com/MACVcbmjHWg/1/screen/canva-lemon%2C-citric%2C-fruit%2C-mediterranean-MACVcbmjHWg.jpg",
        },
        {
          "name": "chilli",
          "Label": "Chilli",
          "picture": "https://marketplace.canva.com/MACV-eXh55w/1/screen/canva-chilli%2C-peppers%2C-red%2C-decorative%2C-vegetables-MACV-eXh55w.jpg",
        },
        {
          "name": "balsamic",
          "Label": "Balsamic Vinegar",
          "picture": "https://www.sensibus.com/deli/sites/sensibus.com/files/styles/article/public/recipes/balsamic-vinegar-sauce.jpg?itok=7Uz4rUy7",
        },
        {
          "name": "oliveOil",
          "Label": "Olive Oil",
          "picture": "https://marketplace.canva.com/MACViwRXxhI/1/screen/canva-olive-oil%2C-salad-dressing%2C-cooking%2C-olive%2C-healthy-MACViwRXxhI.jpg",
        },
        {
          "name": "Spinach",
          "Label": "Spinach",
          "picture": "https://marketplace.canva.com/MACNTF0JzOM/1/screen/canva-close-up-of-green-leaves-of-spinach-MACNTF0JzOM.jpg",
        },
        {
          "name": "carrot",
          "Label": "Carrot",
          "picture": "https://marketplace.canva.com/MACV-uU0568/1/screen/canva-carrots%2C-vegetables%2C-market%2C-agricultural%2C-cultivate-MACV-uU0568.jpg",
        },
        {
          "name": "peanutButter",
          "Label": "Peanut Butter",
          "picture": "https://www.gimmesomeoven.com/wp-content/uploads/2013/11/Homemade-Peanut-Butter-Recipe-2.jpg",
        }


      ]
    }
  );

}

