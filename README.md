# Love Diary
### Deployment: http://love-diary.anyday.com.tw/ 
### Demo link : https://www.youtube.com/watch?v=i9KwDC7gTMs

### 功能介紹：
  這是一款針對情侶來設計的手帳，有註冊和登入功能。設計成一本書的形式，就像翻頁一樣切換。
  
  登入後為Home頁，左頁顯示兩人的交往日期，右頁顯示重要事件作為時間軸。而重要事件的增加減少可由右邊書籤中進入Calendar頁裡面加入重要事件。

  Calendar頁面提供給兩人互相分享日程，右邊Add按鈕可以新增事件，並貼心地分成許多顏色來區分種類。事件會自動儲存，且只會顯示該帳號的資料。事件新增後可長按拖移來更改事件所發生的日期，點擊即可刪除事件。若Add時將事件設「喜愛」，則會自動顯示在Home頁的時間軸，若Add時將事件類型選擇Todo，則會變成待辦事項，新增後會顯示在右下列表，每一項都可拖移至行事曆上。若日曆一次選取多日，即可在右上列表查看所有被選取之事件。
  
  Diary頁面提供人們每日紀錄生活，左右有箭頭可切換日期，也可直接經由左上選擇特定日期。左頁有表情符號可以代表今日心情，並有輸入框可以記錄一天生活。右頁可以上傳照片，並增加照片敘述。按下Save後所有資料都會存進DB，且圖片會轉成imgur網址格式儲存。

### 使用/操作方式 : 
``` 
git clone git@github.com:xena5411/lovediary.git
cd lovediary
yarn
```
#### 本地端測試： master branch
開啟兩個終端機分別執行`cd lovediary & yarn start` 和 `cd lovediary & yarn server`

#### 網站主機部署： Deployed branch

### 使用與參考之框架/模組/原始碼
* antd
* fullcalendar
* imgur(API)

### 專題製作心得 : 
  一開始的想法很多，實際做起來後才發現要實現想像的模樣有些難度，儘管網路上很多套件，但每個人使用的環境、背景都不同，常常會有很多error需要解決。前端後端的溝通很不容易，常常一點小更動就很多份code都要改。而前端的排版以及後端的資料庫該存取的資料也是因沒有正確答案而令人苦惱。在寫這份Final時由於查了很多資料，學會了很多新的套件，也將很多語法都記熟了。Depoly成網站時雖然很不容易、重重難關，但最後成功讓別人從遠端使用自己的作品非常有成就感！
  
  
### 使用之第三方套件、框架、程式碼
* 程式前後端相關:

• Fullcalendar

• imgur(API)

• express

* 網頁美編設計相關:

• antd

• RoughNotation

• Fontawesome

• Material-UI

### 補充說明 : 
 因為想呈現親手寫手帳的感覺，所以排版方面(例如CSS)，是一步步徹底手刻出來的，沒有套用任何模板或套件。
