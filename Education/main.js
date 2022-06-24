let tabs=document.querySelectorAll('.tab-toggle'),
    contents=document.querySelectorAll('.tab-content');


    tabs.forEach((tab,index)=>{
        tab.addEventListener('click',()=>{
            contents.forEach((content)=>{
                content.classList.remove('is-active')

            });
            tabs.forEach((tab)=>{
                tab.classList.remove('is-active')

            });

            contents[index].classList.add('is-active');
            tabs[index].classList.add('is-active');


        });
    });




