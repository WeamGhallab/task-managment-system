import { FormControl } from "@angular/forms";

export function noWhitespaceValidator(control: FormControl) {
  const isWhitespace = (control.value || '').trim().length === 0;
  const isValid = !isWhitespace;
  return isValid ? null : { 'required': true };
}

export const patterns = {
  NationalIdPattern: /^(1|2)([0-9]{9})$/,
  EnglishLetters: /^[a-zA-Z\s]*$/,
  EnglishLettersAndNumbers: /^[a-zA-Z0-9\s]*$/,
  ArabicLetters: /^[\u0600-\u06FF\s]*$/,
  ArabicLettersAndNumbers: /^[0-9\u0600-\u06FF\s]*$/,
  CleanTextPattern: /^[\n\ra-zA-Z0-9\u0600-\u06FF @._-]+$/,
  ArabicCleanTextPattern: /^[0-9\u0600-\u06FF @._-]+$/, 
  EnglishCleanTextPattern: /^[a-zA-Z0-9 @._-]+$/,
  ArabicMultiLinesTextPattern: /^[0-9\u0600-\u06FF @،#= ._,\u200b)(:]+$/,
  EnglishMultiLinesTextPattern: /^[a-zA-Z0-9 @،#= ._,\u200b)(:]+$/,
  MultiLinesTextPattern: /^[\n\ra-zA-Z0-9\u0600-\u06FF @،#= ._,\u200b)(:]+$/,
  ArabicTextPattern: /^[0-9\u0600-\u06FF @،#= ._,\u200b)(:-]+$/,
  EnglishTextPattern: /^[a-zA-Z0-9 @،#= ._,\u200b)(:-]+$/,
  Email: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
  Number: /^[1-9][0-9]*$/,
  DecimalNumber: /^(\d+\.?\d{0,9}|\.\d{1,9})$/,
  LettersAndNumbers: /^[a-zA-Z0-9\u0600-\u06FF @._-]+$/,
  PureTextWithoutWhitSpaces: /^[-a-zA-Z0-9-()._-]+(\s+[-a-zA-Z0-9-()._-]+)*$/,
  PureEnglishArabicTextWithoutWhitSpaces:
    /^[-a-zA-Z0-9-\u0600-\u06FF()._-]+(\s+[-a-zA-Z0-9-\u0600-\u06FF()._-]+)*$/,
  facebookPattern: /^(https:\/\/)(www\.)?(facebook.com)?(\/.*)?$/,
  instagramPattern: /^(https:\/\/)(www\.)?instagram?(\.com)?(\/.*)?$/,
  twitterPattern: /^(https:\/\/)(www\.)?twitter?(\.com)?(\/.*)?$/,
  snapchatPattern: /^(https:\/\/)(www\.)?snapchat?(\.com)?(\/.*)?$/,
  youTubePattern: /^(https:\/\/)(www\.)?youtu(be|.be)?(\.com)?(\/.*)?$/,
  secureUrlPattern:
    /^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/,
};
