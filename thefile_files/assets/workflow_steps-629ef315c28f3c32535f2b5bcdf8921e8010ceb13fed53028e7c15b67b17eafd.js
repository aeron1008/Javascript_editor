(()=>{document.addEventListener("DOMContentLoaded",d);document.addEventListener("turbo:render",d);window.jQuery.ui;function d(){var a=window.location.href,t=k(a);if(!isNaN(t)){var e=new URLSearchParams(window.location.search),r=e.get("step_id");if(r){var o=$(".step-list-item[data-worktask-id='"+r+"']");o.length>0&&(o.addClass("active"),s(r,t))}else{var c=p(t),o=$(".step-list-item:eq("+c+")");if(o.length>0){o.addClass("active");var f=o.data("worktask-id");s(f,t)}}$(".clickable-column").on("click",function(){var i=$(this).data("href");i&&(window.location.href=i)}),$(".step-list-item").on("click",function(i){i.preventDefault(),$(".step-list-item").removeClass("active"),$(this).addClass("active");var n=$(this).data("worktask-id");s(n,t)});var t=window.location.pathname.match(/\/workflows\/(\d+)/);if(t&&t[1]){t=parseInt(t[1]);var w=$("meta[name=csrf-token]").attr("content");$(".step-list").sortable({update:function(i,n){var l=[];$(this).find(".step-list-item").each(function(){l.push($(this).data("worktask-id"))}),$.ajax({url:"/workflows/"+t+"/update_worktask_order",type:"PUT",data:{worktaskIds:l},headers:{"X-CSRF-Token":w},success:function(u){},error:function(u,h,m){}})}})}}}function k(a){var t=a.split("/"),e=t[t.length-2],r=parseInt(e);return isNaN(r)?0:r}function p(a){for(var t=$(".step-list-item"),e=0;e<t.length;e++){var r=$(t[e]);if(r.data("workflow-id")==a)return e}return 0}function s(a,t){!isNaN(t)&&a>0?$.ajax({url:`/workflows/${t}/worktasks/${a}`,type:"GET",dataType:"script",success:function(e){},error:function(e,r,o){e.status===404?console.log(`Step with ID ${a} doesn't exist for workflow with ID ${t}`):console.error(`Error loading step details: ${o}`)}}):v()}function v(){$("#workflow-details").empty()}})();
