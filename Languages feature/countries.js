import 'regenerator-runtime/runtime';
import axios from 'axios';
import { displayMenuItems } from '../apps';
import { menu } from '../apps';
import { displayBtns } from '../apps';
import { all } from '../apps';

const countries = {
    "de": "German",
    "en": "English",
    "es": "Spanish",
    "fr": "French",
    "it": "Italian",
    "ja": "Japanese",
    "nl": "Dutch",
    "no": "Norwegian",
    "pt": "Portuguese",
    "tr": "Turkish",
}

const currentLanguageBtn = document.querySelector('.current-language-btn')
const languageModalOverlay = document.querySelector('.language-modal-overlay')
const closeLangBtn = document.querySelector('.close-language-btn')
const menuTitle = document.querySelector('.title h2')
const translateItems = document.getElementsByClassName('translate')

const languagesOptions = () => {
    let languages = []
    for (let countryCode in countries) {
        if (countryCode == 'en') {
            languages.push(`<button class="language-btn">
                                <span class="fi fi-gb"></span>
                                <span>${countries[countryCode]}</span>
                            </button>`)
        } else if (countryCode == 'ja') {
            languages.push(`<button class="language-btn">
                                <span class="fi fi-jp"></span>
                                <span>${countries[countryCode]}</span>
                            </button>`)
        } else {
            languages.push(`<button class="language-btn">
                                <span class="fi fi-${countryCode}"></span>
                                <span>${countries[countryCode]}</span>
                             </button>`)
        }
    }
    return languages
}

currentLanguageBtn.addEventListener('click', ()=> {
    translation(menuTitle)
    menuTraslated()
    setTimeout(function(){displayMenuItems(menu)}, 1000)
    setTimeout(function(){displayBtns(menu)}, 1000)
})

closeLangBtn.addEventListener('click', ()=> {
    languageModalOverlay.classList.remove('open-language-modal')
})

const translation = (item) => {
    const options = {
        method: 'POST',
        url: 'https://microsoft-translator-text.p.rapidapi.com/translate',
        params: {
          'to[0]': 'es',
          'api-version': '3.0',
          profanityAction: 'NoAction',
          textType: 'plain'
        },
        headers: {
          'content-type': 'application/json',
          'X-RapidAPI-Key': '41c18fdf26msh8b4dc70566cffdcp1c02f4jsnacd95146fdb7',
          'X-RapidAPI-Host': 'microsoft-translator-text.p.rapidapi.com'
        },
        data: `[{"Text":"${item.textContent}"}]`
      };
      
      axios.request(options).then(function (response) {
          item.textContent = response.data[0].translations[0].text;
      }).catch(function (error) {
          console.error(error);
      });
}

const translationAll = (item) => {
    const options = {
        method: 'POST',
        url: 'https://microsoft-translator-text.p.rapidapi.com/translate',
        params: {
          'to[0]': 'es',
          'api-version': '3.0',
          profanityAction: 'NoAction',
          textType: 'plain'
        },
        headers: {
          'content-type': 'application/json',
          'X-RapidAPI-Key': '41c18fdf26msh8b4dc70566cffdcp1c02f4jsnacd95146fdb7',
          'X-RapidAPI-Host': 'microsoft-translator-text.p.rapidapi.com'
        },
        data: `[{"Text":"${item}"}]`
      };
      
      axios.request(options).then(function (response) {
          item = response.data[0].translations[0].text;
      }).catch(function (error) {
          console.error(error);
      });
}

const menuTranslations = (menu, data) => menu.map((items) => {
    const options = {
        method: 'POST',
        url: 'https://microsoft-translator-text.p.rapidapi.com/translate',
        params: {
          'to[0]': 'es',
          'api-version': '3.0',
          profanityAction: 'NoAction',
          textType: 'plain'
        },
        headers: {
          'content-type': 'application/json',
          'X-RapidAPI-Key': '41c18fdf26msh8b4dc70566cffdcp1c02f4jsnacd95146fdb7',
          'X-RapidAPI-Host': 'microsoft-translator-text.p.rapidapi.com'
        },
        data: `[{"Text":"${items[data]}"}]`
      };
      
      axios.request(options).then(function (response) {
        items[data] = response.data[0].translations[0].text;
      }).catch(function (error) {
          console.error(error);
      });
})

const menuTraslated = () => {
    menuTranslations(menu, 'title') 
    menuTranslations(menu, 'category')
    menuTranslations(menu, 'desc')
}


