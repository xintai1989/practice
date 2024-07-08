
        function com(){
            let num1= document.getElementById('input1').value;
            let num2= document.getElementById('input2').value;
            console.log(num1,num2.length);
            if(num1.length==0||num2.length==0){
                document.getElementById('result').value="请输入数字";
                return;
            }
            let i=0;
            for(;i<num1.length;i++){
                if(num1[i]=="."){
                    let len1= num1.split(".")[1].length;
                }
            }
            let j=0;
            for(;j<num2.length;j++){
                if(num1[j]=="."){
                    let len2= num2.split(".")[1].length;
                }
            }
            if(i==num1.length&&j==num2.length){
                document.getElementById('result').value=Number(num1)+Number(num2);
                return;
            }

            let len2= num2.split(".")[1].length;
            let c1=Math.abs(len1-len2);
            let c2=Math.pow(10,Math.max(len1,len2));
            let num11= Number(num1.replace(".",""));
            let num22= Number(num2.replace(".",""));
            if(len1>len2){
                num22*=c1;
            }else if(len1<len2){
                num11*=c1;
            }
            let res=(num11+num22)/c2;
           // console.log(len1,len2);
            document.getElementById('result').value=res;
        }
