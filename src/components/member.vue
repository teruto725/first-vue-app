<template>
<div class="container-fluid member-list">
  <div class = "row">
    <div class="card individual">
      <div class="card-body">
        <p class="card-text name">Evi</p>
      </div>
        <img class="img-thumbnail icon" src="@/assets/sample.png" alt="Thumbnail image">
      <div class="card-body">
        <p class="card-text ind-discription">エース</p>
      </div>
    </div>
    <div class="card individual">
      <div class="card-body">
        <p class="card-text name">Steal</p>
      </div>
            <img class="img-thumbnail icon" src="@/assets/sample.png" alt="Thumbnail image">
      <div class="card-body">
        <p class="card-text ind-discription">強い</p>
      </div>
    </div>
    <div class="card individual">
      <div class="card-body">
        <p class="card-text name">Ceros</p>
      </div>
            <img class="img-thumbnail icon" src="@/assets/sample.png" alt="Thumbnail image">
      <div class="card-body">
        <p class="card-text ind-discription">カベーラ</p>
      </div>
    </div>
    <div class="card individual">
      <div class="card-body">
        <p class="card-text name">Yutapon</p>
      </div>
            <img class="img-thumbnail icon" src="@/assets/sample.png" alt="Thumbnail image">
      <div class="card-body">
        <p class="card-text ind-discription">トゥウィッチ</p>
      </div>
    </div>
  </div>
  
</div>
</template>

<style>
.member-list{
    text-align: center;
}
.individual{
    margin-right: 1%;
    margin-left: 1%;
    margin-bottom: 1%;
    text-align: center;
    background-color: rgba(161, 161, 161, 0.685);
}
.ind-discription{
    margin-right: 1%;
    margin-left: 1%;
    margin-bottom: 1%;
    text-align: center;
    background-color: rgb(29, 29, 29);
    font-size: 15px;
    color:white 
}
.icon{
    margin-right: 2%;
    margin-left: 2%;
    text-align: center;
}
.name{
    background-color: darkgrey;
    text-align: center;
    background-color: rgba(66, 66, 66);
    font-size: 30px;
    color:white 
}
</style>
