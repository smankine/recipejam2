import cuid from 'cuid';
import slug from 'limax';
import sanitizeHtml from 'sanitize-html';


export function search(req, res) {

  res.json({
    "incredients": [
      {
        "name": "butten",
        "key": "butten",
        "picture": "https://lh3.googleusercontent.com/NfhMg17W1b2VMswcNc2bNKCy_s93eV6ylInehlcPpD0fDjXBjplXykx0mdTeaOwnkACsOAk2bRR7o5gR2AS0=s90",

        "replacements": [
          {
            "name": "coconotoil",
            "picture": "https://lh3.googleusercontent.com/NfhMg17W1b2VMswcNc2bNKCy_s93eV6ylInehlcPpD0fDjXBjplXykx0mdTeaOwnkACsOAk2bRR7o5gR2AS0=s90",
            "method": {}
          }
        ]
      }
    ]
  });

}

export function getIncredients(req, res) {

  res.json({
    "incredients": [
      {
        "name": "butten",
        "picture": "https://lh3.googleusercontent.com/NfhMg17W1b2VMswcNc2bNKCy_s93eV6ylInehlcPpD0fDjXBjplXykx0mdTeaOwnkACsOAk2bRR7o5gR2AS0=s90",

        "replacements": [
          {
            "name": "coconotoil",
            "picture": "https://lh3.googleusercontent.com/NfhMg17W1b2VMswcNc2bNKCy_s93eV6ylInehlcPpD0fDjXBjplXykx0mdTeaOwnkACsOAk2bRR7o5gR2AS0=s90",
            "method": {}
          }
        ]
      }
    ]
  });

}

