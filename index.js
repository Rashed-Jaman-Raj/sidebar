    const menuToggle = document.querySelector('.menu-toggle');
    const navigation = document.querySelector('.navigation');
        menuToggle.onclick = () => {
        navigation.classList.toggle('open');

        // main section margin left increase & decrease
        if (navigation.classList.contains('open')) {
      document.querySelector('.main').style.marginLeft = "290px";
  } else {
      document.querySelector('.main').style.marginLeft = "120px";
  }
       
    const listItems = document.querySelectorAll('.list-item');
      listItems.forEach(item => {
        item.onclick = () => {
          listItems.forEach(item => item.classList.remove('active'));
          item.classList.add('active');
        }
      });
    }

    