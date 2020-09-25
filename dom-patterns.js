function showPattern(){
    const colorsArr = ['red', 'orange', 'yellow', 'green','blue', 'indigo', 'violet'];

    let topPosition = 25;
    let leftPosition = 25;
    let width = 500;
    let height = 500;

    while (width > 50) {
        const randomColorIdx = Math.floor(Math.random() * colorsArr.length);
        const newDiv = document.createElement('div');
        
        newDivstyle.top = topPosition + 'px';
        newDivstyle.left = leftPosition + 'px';
        newDivstyle.width = width + 'px';
        newDivstyle.height = height + 'px';
        newDivstyle.background = colorsArr[randomColorIdx];
        }
}