function oyunOyna(oyuncuSecimi) {
    const secenekler = ["taş", "kağıt", "makas"];
    const bilgisayarSecimi = secenekler[Math.floor(Math.random() * 3)];
  
    let sonuc = "";
    if (oyuncuSecimi === bilgisayarSecimi) {
      sonuc = "Berabere!";
    } else if (
      (oyuncuSecimi === "taş" && bilgisayarSecimi === "makas") ||
      (oyuncuSecimi === "kağıt" && bilgisayarSecimi === "taş") ||
      (oyuncuSecimi === "makas" && bilgisayarSecimi === "kağıt")
    ) {
      sonuc = "Kazandın!";
    } else {
      sonuc = "Kaybettin!";
    }
  
    alert(`Sen: ${oyuncuSecimi}, Bilgisayar: ${bilgisayarSecimi}. ${sonuc}`);
  }

  