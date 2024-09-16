function doGet(){
  //return HtmlService.createTemplateFromFile("index").evaluate;
  //return HtmlService.createTemplateFromFile("index").evaluate();
  var output = HtmlService.createTemplateFromFile('index');
  //return output.evaluate();
  var html = output.evaluate();
  return html;
}
  //return "-";

//ユーザーの名前（loginしたメールアドレス)を取得して返す
function getmyName(e){
   var objUser = Session.getActiveUser();
   var name = objUser.getEmail();
  return name;
}


function getWorkListData(){
  var returnWorkList = [];
  // 指定したシートからデータを取得

  var ssId = '1AsX_Ze2uDTnoGRhJH4TD5XvTENCF50ETly_9_sckLJY';// SSIDからスプレッドシートの取得
  var ss = SpreadsheetApp.openById(ssId);
  var sheet = ss.getSheetByName('フォームの回答 1');// 指定されたシート名からシートを取得して返却
 // var values = sheet.getDataRange().getValues();
  
  //console.log("ログ出力です！");
  //console.log(values);

  var workList = sheet.getDataRange().getValues();//シートの情報を全部読み込み
  //console.log(workList);
  for (var i = 1 ; i<workList.length ; i++){
      console.log(workList[i]);
      //学籍番号、氏名、embedLink、コメント
      returnWorkList[i]=[workList[i][2],workList[i][3],workList[i][4],workList[i][5]];
  }
  return returnWorkList;
}
