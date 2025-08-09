document.addEventListener('DOMContentLoaded', () =>{
    const items = document.querySelectorAll('.education')
    let observer;
    observer = new IntersectionObserver((entries) =>{
        entries.forEach(entry =>{
           if(entry.isIntersecting){
            const index = [...items].indexOf(entry.target)
            const delayed = index * 300
            entry.target.style.animationDelay = `${delayed}ms`
            entry.target.classList.add('active')
            observer.unobserve(entry.target)
           }
            
        })
    },{
        threshold: 0.2
         
});
    items.forEach(item => observer.observe(item))
})