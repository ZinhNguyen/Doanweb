// JavaScript Document
var banghang = require('../models/hangmodel');
//Module tìm theo loại hoa
module.exports.select = async function(ml)
{
	var dshang= await banghang.select({maloai:ml});
    //var kq = "<table width=100% style='padding-top:20px'>";
    var kq = "<div class='container col-10'>";
	stt = 0;
	for(i=0;i<dshang.length;i++) 
		{
		//khi load trang chủ sẽ hiển thị đầy đủ trang
		/*
		if(dshoa[i].maloai==ml)
			{
			if(stt%3==0)
				kq=kq+'<tr style="width:33.33%;text-align:center">';
			kq=kq+"<td><a href='/chitiet/"+ dshang[i].mahoa+"'><image src ='images/"+dshang[i].hinh + "' /><br><a href ='/chitiet/"+ dshoa[i].mahoa + "'>" + dshoa[i].tenhoa + "</a><br>Giá Bán: " + dshoa[i].giaban + " VNĐ</td>";
			stt=stt+1;
			if(stt%3==0)
				kq=kq+"</tr>";					
			}
			*/
		//Khi chọn mã loại sẽ hiển thị đúng mã loại truyền vào
		if(dshang[i].maloai==ml)
			{
            //if(stt%3==0)
            var a = dshang[i].giatruoc;
            var b = dshang[i].giaban;
            var c = 100 -((b*100)/a);
			kq=kq+'<div class="box">';
            kq=kq+"<div class='imgbox'><img src='images/"+ dshang[i].hinh + "' alt='Sneaker' style='width:303px;height:386px;'></div><h3 class='gia'>"+ dshang[i].tenhang + "</h3><span>"+ dshang[i].mota + "</span><p><b>"+ 
            dshang[i].giaban + "$ </b><strike>"+  dshang[i].giatruoc + "$ </strike><span class='do'>(-"+ Math.round(c) +"%)</span></p>";
			stt=stt+1;
			//if(stt%3==0)
			kq=kq+"</div>";
			}
		}
    //kq=kq+"</table>";
    kq=kq+"</div>";
	return kq;
};

{/* <div class="container col-10">
        <div class="box">
            <div class="imgbox">
                <img src="images/source/Sneaker.JPG" alt="Sneaker">
            </div>
            <h3 class="gia">Nike</h3>
            <span>Quan jean nam</span>
            <p><b>610k</b><strike>700k</strike><span class="do">(-10%)</span></p>
        </div>
    </div>
 */}