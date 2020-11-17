var dt = new Date();
        function renderDate() {
            dt.setDate(1);
            var day = dt.getDay();
            var today = new Date();
            var endDate = new Date(
                dt.getFullYear(),
                dt.getMonth() + 1,
                0
            ).getDate();

            var prevDate = new Date(
                dt.getFullYear(),
                dt.getMonth(),
                0
            ).getDate();
            var months = [
                "January",
                "February",
                "March",
                "April",
                "May",
                "June",
                "July",
                "August",
                "September",
                "October",
                "November",
                "December"
            ]
            document.getElementById("month").innerHTML = months[dt.getMonth()];
            document.getElementById("date_str").innerHTML =  dt.getFullYear();
            var cells = "";
            for (x = day; x > 0; x--) {
                cells += "<div class='prev_date'>" + (prevDate - x + 1) + "</div>";
            }
            console.log(day);
            for (i = 1; i <= endDate; i++)
             {  
                if(i==7 && dt.getMonth() == 9)
                cells += "<div class='whd'>" + i + "</div>";
                else if(i==10 && dt.getMonth() == 9)
                cells += "<div class='mbd'>" + i + "</div>";
                else if(i==13 && dt.getMonth() == 9)
                cells += "<div class='ird'>" + i + "</div>";
                else if(i==16 && dt.getMonth() == 9)
                cells += "<div class='wfd'>" + i + "</div>";
                else if(i==17 && dt.getMonth() == 9)
                cells += "<div class='pd'>" + i + "</div>";
                else if(i==21 && dt.getMonth() == 9)
                cells += "<div class='nwd'>" + i + "</div>";
                else if(i==27 && dt.getMonth() == 9)
                
                cells += "<div class='whda'>" + i + "</div>";


                else if(i==8 && dt.getMonth() == 10)
                cells += "<div class='pol'>" + i + "</div>";
                else if(i==9 && dt.getMonth() ==10)
                cells += "<div class='rec'>" + i + "</div>";
                else if(i==18 && dt.getMonth() == 10)
                cells += "<div class='gis'>" + i + "</div>";
                else if(i==21 && dt.getMonth() == 10)
                cells += "<div class='fish'>" + i + "</div>";
                else if(i==5 && dt.getMonth() == 11)
                cells += "<div class='soil'>" + i + "</div>";
                else if(i==11 && dt.getMonth() == 11)
                cells += "<div class='mnt'>" + i + "</div>";
                else if(i==18 && dt.getMonth() == 11)
                cells += "<div class='imd'>" + i + "</div>";
                else if (i == today.getDate() && dt.getMonth() == today.getMonth()) cells += "<div class='today'>" + i + "</div>";
                else
                    cells += "<div class='x'>" + i + "</div>";
            }
            document.getElementsByClassName("days")[0].innerHTML = cells;

        }

        function moveDate(para) {
            if(para == "prev") {
                dt.setMonth(dt.getMonth() - 1);
            } else if(para == 'next') {
                dt.setMonth(dt.getMonth() + 1);
            }
            renderDate();
        }
