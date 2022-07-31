// const leftContainer= document.getElementById("left-container")
// const collapseIcon= document.getElementById("collapse-icon");
// debugger
// // const collapseSpan= document.getElementById("collapse-span");
// collapseIcon.addEventListener("click", function(){
//     leftContainer.style.display= "none";
// })

const innerHTML =`
<main>
<section class="main-container">          
<!-- left-sidebar -->
<div class="left-sidebar col-sm-2">
    <div class="container-fluid" id="left-container">
        <!-- dropdown button -->
        <div class="dropdown">
            <button type="button" class="top-btn  text-white p-1" data-toggle="dropdown">
                <span class="green-logo">AR</span>
                <div class="profile-name">
                    <div class="name"> Amisha Rijal 
                        <span class="arrow-btn"><i class="fa-solid fa-angle-down"></i></span></div>    
                    <div class="email"> rijalamisha17@gmail.com</div>
                </div>
            </button>
            <!-- dropdown menu -->
            <div class="dropdown-menu">
                <div class="dropdown-btn d-flex">
                      <span class="green-logo logo bg-danger p-1">AR</span>
                      <div class="heading-email">
                         <div class="heading">
                             Amisha Rijal
                         </div>
                         <div class="email">
                             1 project
                         </div>
                      </div>
                  </button>
                </div>
                 <div class="top-settings ">
                  <ul>
                      <li><a href="#">Organization settings</a></li>
                      <li><a href="#">Members</a></li>
                      <li><a href="#">Teams</a></li>
                      <li><a href="#">Usage & Billing</a></li>
                      <li> <a href="#">Support</a></li>
                      <li><a href="#">Switch organization</a></li>
                  </ul>
                 </div>
                 <hr class="bg-muted">
                 <div class="bottom-setting">
                  <div class="bottom-btn d-flex ">
                      <span class="orange-logo  logo p-1 bg-primary">R</span>
                      <div class="bottom-email">
                          <div class="bold-email">rijalamisha17@gmail.com</div>
                          <div class="light-email">rijalamisha17@gmail.com</div>
                          

                      </div>
                  </div>
                 </div>

                 </button>


            </div>
        </div>
        <!-- settings    -->
        <div class="wrap-setting"> 
        <div class="top-setting">
            <div class="projects setting ">
            <span class="setting-icon">
                <svg viewBox="0 0 16 16" fill="currentColor" height="20px" width="20px"><path d="M5.43,11.92a.73.73,0,0,1-.53-.22L3,9.82A.75.75,0,0,1,3,8.76L4.9,6.88A.75.75,0,0,1,6,7.94L4.61,9.29,6,10.64A.75.75,0,0,1,6,11.7.74.74,0,0,1,5.43,11.92Z"></path><path d="M10.58,11.92a.74.74,0,0,1-.53-.22.75.75,0,0,1,0-1.06L11.4,9.29,10.05,7.94a.75.75,0,0,1,1.06-1.06L13,8.76a.74.74,0,0,1,0,1.06L11.11,11.7A.71.71,0,0,1,10.58,11.92Z"></path><path d="M15.26,16H.76A.75.75,0,0,1,0,15.26V.76A.74.74,0,0,1,.76,0H5.12A2.75,2.75,0,0,1,6.77.56L8.51,1.87a1.3,1.3,0,0,0,.75.25h6a.76.76,0,0,1,.75.75V15.26A.76.76,0,0,1,15.26,16ZM1.51,14.51h13V3.62H9.26a2.75,2.75,0,0,1-1.65-.55L5.87,1.76h0a1.3,1.3,0,0,0-.75-.25H1.51Z"></path></svg></span>
            <span class="setting-text"> <a href="#">Projects</a></span>
            </div>
            <div class="issues setting">
            <span class="setting-icon">
                <svg viewBox="0 0 16 16" fill="currentColor" height="20px" width="20px"><path d="M13.24,16H2.74A2.75,2.75,0,0,1,0,13.26V2.76A2.75,2.75,0,0,1,2.74,0h10.5A2.75,2.75,0,0,1,16,2.76v10.5A2.75,2.75,0,0,1,13.24,16ZM2.74,1.51A1.25,1.25,0,0,0,1.49,2.76v10.5a1.25,1.25,0,0,0,1.25,1.25h10.5a1.25,1.25,0,0,0,1.25-1.25V2.76a1.25,1.25,0,0,0-1.25-1.25Z"></path><rect x="0.74" y="2.61" width="14.5" height="1.5"></rect><rect x="0.74" y="5.26" width="14.5" height="1.5"></rect><path d="M10.79,12.08H5.19a1.25,1.25,0,0,1-1.25-1.25V9.42H.74V7.92h4.7v2.66h5.1V7.92h4.7v1.5H12v1.41A1.25,1.25,0,0,1,10.79,12.08Z"></path></svg>
            </span>
            <span class="setting-text"><a href="#">Issues</a></span>  
            </div>
            <div class="Perfomance setting">
            <span class="setting-icon">
                <svg viewBox="0 0 16 16" fill="currentColor" height="20px" width="20px"><path d="M3.81,16a1.21,1.21,0,0,1-.74-.26,1.19,1.19,0,0,1-.33-1.45L4.79,10,2.32,8.39a1,1,0,0,1-.07-1.58L10.67.26a1.19,1.19,0,0,1,1.8,1.46L10.41,6,12.9,7.64a1,1,0,0,1,.44.78,1,1,0,0,1-.38.8L4.54,15.74A1.15,1.15,0,0,1,3.81,16ZM3.76,7.53l2.4,1.56a.77.77,0,0,1,.27,1L4.65,13.76l6.81-5.27L9,6.91a.75.75,0,0,1-.26-1l1.78-3.71ZM12.08,8.9Zm-.95-8h0Z"></path></svg>
            </span>
            <span class="setting-text"><a href="#">Perfomance</a></span>
            </div>
        </div>
        <div class="bottom-setting">
            <div class="Collapse" id="collapse-icon">
               <span class="setting-icon" > 
                <svg class="e78qnej1 css-915wlc" viewBox="0 0 16 16" fill="currentColor" height="20px" width="20px"><path d="M8,16a8,8,0,1,1,8-8A8,8,0,0,1,8,16ZM8,1.53A6.47,6.47,0,1,0,14.47,8,6.47,6.47,0,0,0,8,1.53Z"></path><path d="M11.12,9.87a.73.73,0,0,1-.53-.22L8,7.07,5.41,9.65a.74.74,0,0,1-1.06,0,.75.75,0,0,1,0-1.06L7.47,5.48a.74.74,0,0,1,1.06,0l3.12,3.11a.75.75,0,0,1,0,1.06A.74.74,0,0,1,11.12,9.87Z"></path></svg>
               </span>
               <span class="setting-text"><a href="#">Collapse</a></span>
        </div>
        </div>

    </div>    
    </div>
</div>
<!-- middle-article -->
<div class="middle-article col-sm-10">
    <div class="container-fluid">
        <h1>Issues</h1>
        <hr class="horizontal-line">
    </div>
</div>

</section>
</main>
`
document.write(innerHTML);




