import express from "express";
import { Bot,webhookCallback } from "grammy";
import fetch from "node-fetch"
import {} from 'dotenv/config'
const bot = new Bot(process.env.BOT_TOKEN);



  

bot.on('message', async (ctx, next) => {
  const chatId = ctx.message.chat.id
    const threadID = ctx.message.message_thread_id
    const fromID = ctx.message.from.id
    const lastName = (ctx.message.from.last_name == undefined) ? "":ctx.message.from.last_name;
    const fullName = `${ctx.message.from.first_name} ${lastName}`
    // const messID = ctx.message.message_id
    console.log(chatId + " - " + fromID) 
    const tagName = `<a href="tg://user?id=${fromID}">${fullName}</a>`
    if (fromID == "5229925261") {
        const message = ctx.message.text;
        const linkRegex = /(https?:\/\/[^\s]+)/;
        const pee = /https:\/\/sh/;
        if (linkRegex.test(message)) {
            const url = message.match(linkRegex)[0]
            if (pee.test(url)){
              let retryCount = 0;
              const maxRetries = 10;
      while (retryCount < maxRetries) {
        try {
              await fetch(url).then(response => response.url).
              then(async (checkURL) => { 
              const realUrl = decodeURIComponent(checkURL.replace(/https:\/\/shopee\.vn\/universal-link\?af=false&deep_and_deferred=1&redir=/gm,'')) 
              const unixtime = Math.floor(Date.now())
              const apiURL = `https://apiv3.beecost.vn/search/product?timestamp=${unixtime}&product_url=${realUrl}`
              await fetch(apiURL, {
        method: 'GET',
        headers: {
            'Content-type': 'application/json',
            'Accept': 'application/json',
            'Authorization': 'Bearer {token}',
        },
    }).then(resp => resp.text()).then(object => {
      const obj = JSON.parse(object)
      const sts =  obj.status
      if (sts === "error" && obj.msg === "product url is not valid") {
        ctx.reply(`Opps! Có vẻ như đây không phải link sản phẩm! Vui lòng kiểm tra lại nhé! ${tagName}`,{message_thread_id: threadID, parse_mode: "HTML"} )
        return next()
      } else {
    
    
                 

        fetch("https://addlivetag.com/api/add-video.php", {
          "headers": {
            "accept": "application/json, text/javascript, */*; q=0.01",
            "accept-language": "vi-VN,vi;q=0.9,fr-FR;q=0.8,fr;q=0.7,en-US;q=0.6,en;q=0.5",
            "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
            "sec-ch-ua": "\"Not_A Brand\";v=\"8\", \"Chromium\";v=\"120\"",
            "sec-ch-ua-mobile": "?1",
            "sec-ch-ua-platform": "\"Android\"",
            "sec-fetch-dest": "empty",
            "sec-fetch-mode": "cors",
            "sec-fetch-site": "same-origin",
            "x-requested-with": "XMLHttpRequest",
            "cookie": "us_id=8ce0d9b891645b8162e72b76a2c8e50d; ref=xurio; _ga=GA1.1.1952564566.1704787707; _fbp=fb.1.1704787706854.147812631; ref=0; PHPSESSID=gicfpeqkj9ddnq754lhpauuorm; user=xurio; _ga_JFEPJSWCC6=GS1.1.1704808576.5.1.1704808577.0.0.0",
            "Referer": "https://addlivetag.com/",
            "Referrer-Policy": "strict-origin-when-cross-origin"
          },
          "body": `user=xurio&user_id=8ce0d9b891645b8162e72b76a2c8e50d&video=${url}`,
          "method": "POST"
        })

          fetch("https://addlivetag.com/", {
          "headers": {
            "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7",
            "accept-language": "vi-VN,vi;q=0.9,fr-FR;q=0.8,fr;q=0.7,en-US;q=0.6,en;q=0.5",
            "sec-ch-ua": "\"Not_A Brand\";v=\"8\", \"Chromium\";v=\"120\"",
            "sec-ch-ua-mobile": "?1",
            "sec-ch-ua-platform": "\"Android\"",
            "sec-fetch-dest": "document",
            "sec-fetch-mode": "navigate",
            "sec-fetch-site": "same-origin",
            "sec-fetch-user": "?1",
            "upgrade-insecure-requests": "1",
            "cookie": "us_id=8ce0d9b891645b8162e72b76a2c8e50d; PHPSESSID=l8hakk8vsgopv8sr7bg737136o; user=xurio; ref=xurio; _ga=GA1.1.1952564566.1704787707; _fbp=fb.1.1704787706854.147812631; ref=0; _ga_JFEPJSWCC6=GS1.1.1704787706.1.1.1704789018.0.0.0",
            "Referer": "https://addlivetag.com/",
            "Referrer-Policy": "strict-origin-when-cross-origin"
          },
          "body": null,
          "method": "GET"
        })
        .then(response => response.text()).
        then(data => {
      
        const startIndex = data.indexOf('<td>1</td>')
        const endIndex = data.lastIndexOf(url)
        const content = data.substring(startIndex, endIndex + 1).toString()
        const linkRegex2 = /href="(.*?)"/;
        const long = /https:\/\/vn.shp.ee\//
        const lH = content.match(linkRegex2)[1]
          const videoId = content.match(/data-id="(\d+)"/)
          const userId = content.match(/user-id="([^"]+)"/)
        fetch("https://addlivetag.com/api/view-video.php", {
          "headers": {
            "accept": "application/json, text/javascript, */*; q=0.01",
            "accept-language": "vi-VN,vi;q=0.9,fr-FR;q=0.8,fr;q=0.7,en-US;q=0.6,en;q=0.5",
            "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
            "sec-ch-ua": "\"Not_A Brand\";v=\"8\", \"Chromium\";v=\"120\"",
            "sec-ch-ua-mobile": "?1",
            "sec-ch-ua-platform": "\"Android\"",
            "sec-fetch-dest": "empty",
            "sec-fetch-mode": "cors",
            "sec-fetch-site": "same-origin",
            "x-requested-with": "XMLHttpRequest",
            "cookie": `us_id=${userId[1]}; PHPSESSID=l8hakk8vsgopv8sr7bg737136o; user=xurio; ref=xurio; _ga=GA1.1.1952564566.1704787707; _fbp=fb.1.1704787706854.147812631; ref=0; _ga_JFEPJSWCC6=GS1.1.1704787706.1.1.1704794566.0.0.0`,
            "Referer": "https://addlivetag.com/",
            "Referrer-Policy": "strict-origin-when-cross-origin"
          },
          "body": `user_id=${userId[1]}&id=${videoId[1]}`,
          "method": "POST"
        }).then(resp => {resp.text()
          
            const video = lH.split("?")[0]
            const strMess = `Đã Gắn Video Thành Công ${tagName}`
           ctx.replyWithPhoto("https://down-vn.img.susercontent.com/file/vn-11134201-7r98o-lp0773go9gemea",{caption: strMess, message_thread_id: threadID, reply_markup: {
              inline_keyboard: [
                /* Inline buttons. 2 side-by-side */
                [ { text: "💯 Đến Video 💯", url: video }],
    
                /* One button */
                //[ { text: "❓Hướng Dẫn", url: "https://t.me/ChotDonBot" }, { text: "🔥 15 Voucher 50K", url: "https://www.facebook.com/groups/salelameofficial/"}]
            ]
          }
     , parse_mode: "HTML"});
          
        }) 
        
        
                
          
        
        
          
          
        })

      }
    })

      }) 

      break;
    } catch (ers) {
      console.log(ers)
      retryCount++;
    }
  }
    if (retryCount === maxRetries) {
      ctx.reply(`Máy chủ gặp sự cố trong quá trình truy xuất, hãy thử lại nhé! ${tagName}`,{message_thread_id: threadID, parse_mode: "HTML"} )
      // Handle the case when the maximum number of retries is reached
      //await ctx.deleteMessage(message.message_id); 
    }         
            
        }
      }
    }
    })
        
    
    
 
    if (process.env.NODE_ENV === "production") {
      const app = express();
      app.use(express.json());
      app.use(webhookCallback(bot, "express"));
    
      const PORT = process.env.PORT || 3000;
      app.listen(PORT, () => {
        console.log(`Bot listening on port ${PORT}`);
      });
    } else {
      bot.start();
    }
  
    process.once("SIGINT", () => bot.stop("SIGINT"));
    process.once("SIGTERM", () => bot.stop("SIGTERM"));


    
