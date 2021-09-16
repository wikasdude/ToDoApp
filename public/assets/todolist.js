$(document).ready(function(){
   var form = $('form');
   console.log(form);
    $('form').on('submit',function(){
        var item = $('form input');
        console.log(item.val());

        var todo = { item: item.val()};
       console.log(todo);
        $.ajax({
            type:'post',
            url:'/todo',
            data: todo,
            success:function(data){
                console.log(data);
                location.reload();
            }
        });
        return false;
    });

$('li').on('click',function(){

    var item = $(this).text().replace(/ /g,"-");
    $.ajax({
        type:'delete',
        url:'/todo/' +item,
         
        success:function(data){
            console.log(data);
            location.reload();
        }
    });

})

});