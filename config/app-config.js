// ※ 公開されるので「秘密トークン」は絶対に入れないでください
//   - OK: LIFF_ID, GASの/exec URL
//   - NG: CHANNEL_ACCESS_TOKEN, CHANNEL_SECRET などサーバ秘密

window.APP_CONFIG = Object.freeze({
  BASE: 'https://script.google.com/macros/s/AKfycbz5yMUGWZFa9bawN381W9JA1VlYIBTeJKYtia8PhscH-n6-QCjFjvQNAS8TWpdbuKTw/exec', // GAS Webアプリの/exec
  LIFF_ID: '2008192477-4pJ07kDE',                                               // LINE Developers で発行
  // 環境を分けるなら任意で:
  ENV: 'prod', // 'stg' など
});
