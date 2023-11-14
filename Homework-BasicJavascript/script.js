function openTab(tabName) {
    var i, tabContent;
    tabContent = document.getElementsByClassName("tab-content");
    for (i = 0; i < tabContent.length; i++) {
      tabContent[i].style.display = "none";
    }
    document.getElementById(tabName).style.display = "block";
  }

  function registerUser() {
    var namein = document.getElementById("name").value;
    var umurin = document.getElementById("umur").value;
    var uangsakuin= document.getElementById("uangSaku").value;
    if (!namein || !umurin || !uangsakuin){
        alert("Silahkan Isi Semua Kolom Inputan atau inputkan sesuai yang di minta"); 
        return false  
    }else if (namein.length < 10 ){
        alert("Nama Minimal 10 Huruf ");
        return false  
    }else if (umurin <=25){
        alert("Umur Belum Cukup harus di atas 25");
        return false
    }else if (uangsakuin <=100000 || uangsakuin >=1000000){
        alert("uang saku minimal 100000 maksimal 1000000");
        return ;
    }
    

    var table = document.getElementById("tbody")
    var newRow = table.insertRow(table.rows.length);
    


    var cell1 = newRow.insertCell(0);
    var cell2 = newRow.insertCell(1);
    var cell3 = newRow.insertCell(2);


    cell1.innerHTML = namein;
    cell2.innerHTML = umurin;
    cell3.innerHTML = uangsakuin;
    
    showResume()
    document.getElementById("registrationForm").reset();
    
    return false;
  }
  function showResume() {
  
    var tableRows = document.getElementById("tbody").getElementsByTagName("tr")
    var totalUmur = 0;
    var totalUangSangu = 0;

    for (var i = 0; i < tableRows.length; i++) {
      var umur = parseInt(tableRows[i].getElementsByTagName("td")[1].innerHTML);
      var uangSangu = parseInt(tableRows[i].getElementsByTagName("td")[2].innerHTML);
      totalUmur += umur;
      totalUangSangu += uangSangu;
    }

    var averageUmur = totalUmur / tableRows.length;
    var averageUangSangu = totalUangSangu / tableRows.length;


    document.getElementById("resumeTeks").innerHTML = "Rata-rata pendaftar memiliki uang sangu sebesar " + averageUangSangu + " dengan rata-rata umur " + averageUmur;
  }