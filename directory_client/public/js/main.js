const accordionItemHeaders = document.querySelectorAll(
    ".accordion-item-header"
  );
  
  accordionItemHeaders.forEach((accordionItemHeader) => {
    accordionItemHeader.addEventListener("click", (event) => {
      // Uncomment in case you only want to allow for the display of only one collapsed item at a time!
  
      const currentlyActiveAccordionItemHeader = document.querySelector(
        ".accordion-item-header.active"
      );
      if (
        currentlyActiveAccordionItemHeader &&
        currentlyActiveAccordionItemHeader !== accordionItemHeader
      ) {
        currentlyActiveAccordionItemHeader.classList.toggle("active");
        currentlyActiveAccordionItemHeader.nextElementSibling.style.maxHeight = 0;
      }
      accordionItemHeader.classList.toggle("active");
      const accordionItemBody = accordionItemHeader.nextElementSibling;
      if (accordionItemHeader.classList.contains("active")) {
        accordionItemBody.style.maxHeight = accordionItemBody.scrollHeight + "px";
      } else {
        accordionItemBody.style.maxHeight = 0;
      }
    });
  });
  // Item Header

  // Start Scrolling To Top
const scrolling = document.querySelector(".arrow");
const apperArrow = document.querySelector(".appear");
console.log(scrolling);
function scrollToTop(ar) {
    window.addEventListener("scroll", () => {
        if (window.scrollY >= document.body.offsetTop + 300) {
            ar.classList.add("appear");
        } else {
            ar.classList.remove("appear");
        }
    })

    ar.addEventListener("click", () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    })
}
scrollToTop(scrolling);
// End Scrolling To Top

// Start Fetch On Data Products
fetch("/api/method/directory_client.api.products")
        .then((response) => response.json())
        .then((data) => {
          data.message.forEach((repo) => {
            // row
            const row = document.getElementById("row");
            // col
            const col = document.createElement("div");
            col.className = `col-md-6 col-lg-4 mb-4 ps-0`;
            row.appendChild(col);
            // box
            const mainProduct = document.createElement("div");
            mainProduct.className = `box m-auto card border overflow-hidden`;
            mainProduct.style.height = `560px`;
            col.appendChild(mainProduct);
            // pic
            const link = document.createElement("a");
            link.href = `${repo.site_name}/${repo.route}`;
            link.setAttribute("target", "blank");
            const mainPic = document.createElement("div");
            const mainImg = document.createElement("img");
            mainImg.className = `mw-100 w-100`;
            mainImg.style.height = "200px";
            mainImg.style.objectFit = "contain";
            mainImg.src = `${repo.site_name}${repo.website_image}`;
            mainPic.appendChild(mainImg);
            link.appendChild(mainPic)
            mainProduct.appendChild(link)
            // head
            const linkHeadOne = document.createElement("a");
            linkHeadOne.href = `${repo.site_name}/${repo.route}`;
            linkHeadOne.setAttribute("target", "blank");
            linkHeadOne.className = `desc d-flex flex-column gap-2 border-top`;
            linkHeadOne.style.height = `85px`
            linkHeadOne.style.overflow = `hidden`
            const head = document.createElement("h5");
            head.className = `ps-3 pt-2 text-black`;
            head.appendChild(document.createTextNode(repo.item_name));
            linkHeadOne.appendChild(head);
            mainProduct.appendChild(linkHeadOne);
            // Desc
            const linkHeadTwo = document.createElement("a");
            linkHeadTwo.href = `${repo.site_name}/${repo.route}`;
            linkHeadTwo.setAttribute("target", "blank");
            linkHeadTwo.className = `desc d-flex flex-column gap-2`;
            const mainP = document.createElement("p");
            mainP.style.height = `188px`
            mainP.className = `mb-4 p-3 text-secondary`;
            mainP.style.overflow = `hidden`;
            mainP.style.textOverflow = `ellipsis`;
            function removeTags(str) { 
              if ((str === null) || (str=== '')) 
                return false; 
              else
                str = str.toString(); 
                
              // Regular expression to identify HTML tags in 
              // the input string. Replacing the identified 
              // HTML tag with a null string. 
              return str.replace( /(<([^>]+)>)/ig, ''); 
            } 
            mainP.appendChild(document.createTextNode(removeTags(repo.description)));
            linkHeadTwo.appendChild(mainP);
            mainProduct.appendChild(linkHeadTwo);

            // Learn more
            const linkThree = document.createElement("a");
            linkThree.href = `${repo.site_name}/${repo.route}`;
            linkThree.setAttribute("target", "blank");
            linkThree.className = `btn main-btn d-flex align-items-center justify-content-center ms-3`;
            linkThree.style.width = `fit-content`;
            linkThree.style.marginBottom = `1rem`;
            linkThree.appendChild(document.createTextNode(`Learn More`))
            mainProduct.appendChild(linkThree)
          });
          
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        });
// End Fetch On Data Products
        
// Start Fetch On Data Blogs
        fetch("/api/method/directory_client.api.blog")
        .then((response) => response.json())
        .then(repos => {
          repos.message.forEach((repos) => {
            // row
            const rows = document.getElementById("rows");
            // col
            const col = document.createElement("div");
            col.className = `col-md-6 col-lg-4 mb-4 ps-0`;
            rows.appendChild(col);
            // box
            const mainProduct = document.createElement("div");
            mainProduct.className = `box m-auto card border overflow-hidden`;
            mainProduct.style.height = `500px`;
            col.appendChild(mainProduct);
            // pic
            const link = document.createElement("a");
            link.href = `${repos.site_name}/${repos.route}`;
            link.setAttribute("target", "blank");
            const mainPic = document.createElement("div");
            const mainImg = document.createElement("img");
            mainImg.className = `mw-100 w-100`;
            mainImg.style.height = "200px";
            mainImg.style.objectFit = "contain";
            mainImg.src = `${repos.meta_image}`;
            mainPic.appendChild(mainImg);
            link.appendChild(mainPic)
            mainProduct.appendChild(link)
            // head
            const linkHeadOne = document.createElement("a");
            linkHeadOne.href = `${repos.site_name}/${repos.route}`;
            linkHeadOne.setAttribute("target", "blank");
            linkHeadOne.className = `desc d-flex flex-column gap-2 border-top`;
            linkHeadOne.style.overflow = `hidden`
            const head = document.createElement("h5");
            head.className = `ps-3 pt-2 pe-3 text-black`;
            head.appendChild(document.createTextNode(repos.title));
            linkHeadOne.appendChild(head);
            mainProduct.appendChild(linkHeadOne);
            // Desc
            const linkHeadTwo = document.createElement("a");
            linkHeadTwo.href = `${repos.site_name}/${repos.route}`;
            linkHeadTwo.setAttribute("target", "blank");
            linkHeadTwo.className = `desc d-flex flex-column gap-2`;
            const mainP = document.createElement("p");
            mainP.style.height = `188px`
            mainP.className = `mb-4 p-3 text-secondary`;
            mainP.style.overflow = `hidden`;
            mainP.style.textOverflow = `ellipsis`;
            function removeTags(str) { 
              if ((str === null) || (str=== '')) 
                return false; 
              else
                str = str.toString(); 
                
              // Regular expression to identify HTML tags in 
              // the input string. Replacing the identified 
              // HTML tag with a null string. 
              return str.replace( /(<([^>]+)>)/ig, ''); 
            } 
            mainP.appendChild(document.createTextNode(removeTags(repos.content)));
            linkHeadTwo.appendChild(mainP);
            mainProduct.appendChild(linkHeadTwo);
          })
        });
// End Fetch On Data Blogs

// Fetch On form 
$("#sub-btn").click(function() {

  fetch('/api/method/directory_client.api.contact', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ 
    first_name: document.querySelector("input[id='input-first-name']").value,
    last_name: document.querySelector("input[id='input-last-name']").value,
    phone: document.querySelector("input[id='input-phone']").value,
    company: document.querySelector("input[id='input-company']").value,
    job_title: document.querySelector("input[id='input-job-title']").value,
    email: document.querySelector("input[id='input-email']").value,
    subject: document.querySelector("input[id='input-subject']").value,
    description: document.querySelector("input[id='input-description']").value
  }) }) .then(response => response.json()) .then(data => console.log(data), console.log("DONE"), frappe.msgprint("Welcome to Jirlie Directory")) .catch(error => console.error(error)); 
})

		 
// Start Toggle Menu
var btn = document.querySelector('.toggle');
var btnst = true;
btn.onclick = function() {
  if(btnst == true) {
    document.querySelector('.toggle span').classList.add('toggle');
    document.getElementById('sidebar').classList.add('sidebarshow');
    btnst = false;
  }else if(btnst == false) {
    document.querySelector('.toggle span').classList.remove('toggle');
    document.getElementById('sidebar').classList.remove('sidebarshow');
    btnst = true;
  }
}
// End Toggle Menu



