/*Yapılan işlemler programın işleyiş mantığının daha kolay anlaşılabilmesi için adım adım numaralandırılmıştır.*/
/* Bu yapı kodluyoruz'un verdiği proje örneğinin sitesinden alınmıştır.(https://cengizcmataraci.me/javascripttodolist/)*/
/* LocalStorage eklenmemiştir. */


//SELECTORS 1.ADIM
/* İlk olarak index.html doyası üzerinde oluşturuduğumuz ve listemizi kontrol etmemizi sağlayacak elelmanları seçiyoruz. */
const todoInput = document.querySelector('#task');
const todoButton = document.querySelector('#liveToastBtn');
const todoUl = document.querySelector('ul');

//LİSTE ELEMANLARINA CLOSE TAG EKLENMESİ 2.3.ADIM 
let liList = document.querySelectorAll('li'); 
//burada çoğul seçim sebebiyle querySelecterAll denmesi önemlidir.
let i;
for (i = 0; i < liList.length; i++) {
    let spanLi = document.createElement('span');
    let spanLiX = document.createTextNode('\u00D7');
    spanLi.className = 'close';
    spanLi.appendChild(spanLiX);
    liList[i].appendChild(spanLi);
}       //Bu işlemden sonra liste elemanlarını kaldırma ve işaretleme adımlarına geçebiliriz.


//CLOSE TAG'ı AKTİF HALE GETİRMEK 3.1.ADIM
const close = document.querySelectorAll('.close');
let q;
for (q = 0; q < close.length; q++) {
    close[q].onclick = function () {
        let div = this.parentElement;
        div.style.display = "none";
    };
}
/*BU for döngüsü sadece daha önceden tanımlanmış li elemanları içerisinde bulunan close tag'ini çalıştıracaktır. bu sebeple newElement() fonksiyonunun içerisinde de aynı döngüyü oluşturduk. Bu döngü oluşturulmadığı taktirde hazır olarak gelen li elemanlarının döngüye ekleme-çıkarma yapmadan silinmeyeceğini görebiliriz.*/


//LİSTE ELEMANLARINI CHECK ETMEK  3.3.ADIM
//UL altındaki elemanlara EventListener ekliyoruz.
todoUl.addEventListener("click", function (e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
    }
}
)   /* Burada da ul altındaki elemanlar ".target" eventi aracılığıyla mouse ile tıklanan yer eğer li tag'ine sahipse ona checked sınıfı eklemektedir ve Css üzerinde oluşturduğumuz style görünür kılınmaktadır.
 */

//FONSKİYONLAR 2.ADIM
/* Bu adımda index.html dosyasında ekle butonuna atanan onclick eventini yani newElement() eventini oluşturuyoruz.
 */
function newElement() {         //2.1.ADIM
    let li = document.createElement('li');
    let inputValue = todoInput.value;
    let liValue = document.createTextNode(inputValue);
    li.appendChild(liValue);
    if (inputValue === "" || inputValue.replace(/^\s+|\s+$/g, "").length == 0) {
        alert("hata");
    } else {
        document.getElementById("list").appendChild(li);
    }
    document.getElementById("task").value = "";

    //HER BİR Lİ ELEMANINA CLOSE TAG EKLENMESİ 2.2.ADIM

    let spanLi = document.createElement('span');
    let spanLiX = document.createTextNode('\u00D7');
    spanLi.classList = 'close'; //burada tek bir sınıf ekleneceği için className'de denilebilir.
    spanLi.appendChild(spanLiX);
    li.appendChild(spanLi);
    /*Eğer todo list'imiz boşsa yeni eklediğimiz her elemanda close tag'i görünür olacaktır. Ancak verilen temel dosyalarda olduğu gibi hazır li'ler içerisinde close tag'i görünmeyecektir. Bunun için yukarıda 2.3.ADIM'da hazır li elemanlarına close tag ekleyen bir for döngüsü yazacağız.*/
    
    // 3.ADIM
    /* Bu adımda daha önce 2.2. Adımda  sonradan oluşturduğumuz li elemanlarına eklenen close tagini/sınıfını seçiyoruz. Kullandığımız for döngüsüyle her bir close sınıfının parent elementini seçip görüntülenmesini/"display" "yok"/"none" olarak değiştiriyoruz. Aslında bu elemanlar silinmiş olmuyor/ sadece görüntü ekrana basılmıyor. */
    /* Bu döngünün 2 kere tanımlanması saçma olabilir ancak hem burada hem de yukarıda tanımlanmadığı zaman listeye eleman eklemeden silme işlemi yapılamıyor. */
    
    let close = document.querySelectorAll('.close');
    let q;
    for (q=0; q<close.length; q++){
        close[q].onclick = function () {
            let div = this.parentElement;
            div.style.display = "none";
        };
    }
}


