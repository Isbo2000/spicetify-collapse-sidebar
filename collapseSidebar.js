// NAME: Collapse Sidebar
// AUTHOR: Isbo2000
// DESCRIPTION: Collapse sidebar and expand on hover

/// <reference path="../globals.d.ts" />

(function collapseSidebar() {
    const sidebar = document.getElementById("Desktop_LeftSidebar_Id")
    var folderItems = Array.from(document.getElementsByClassName("main-yourLibraryX-listItem"))

    //check if sidebar is loaded
    if (Object.keys(folderItems).length == 0) {
        setTimeout(collapseSidebar, 300);
        return
    }

    //initialize folder items on load
    folderItems.forEach(folderItem => {
        if (folderItem.getAttribute("style") == "--ylx-folder-depth: 1;") {
            folderItem.setAttribute("style", "--ylx-folder-depth: 0;")
            folderItem.classList.add("folderItem")
        }
    })

    //excecute when mouse enters sidebar area
    sidebar.addEventListener("mouseenter", (event) => {
        var folderItems = Array.from(document.getElementsByClassName("folderItem"))
        if (Object.keys(folderItems).length !== 0) {
            folderItems.forEach(folderItem => {
                folderItem.setAttribute("style", "--ylx-folder-depth: 1;")
            })
        }
    })
    
    //excecute when mouse leaves sidebar area
    sidebar.addEventListener("mouseleave", (event) => {
        var folderItems = Array.from(document.getElementsByClassName("main-yourLibraryX-listItem"))
        folderItems.forEach(folderItem => {
            if (folderItem.getAttribute("style") == "--ylx-folder-depth: 1;") {
                folderItem.setAttribute("style", "--ylx-folder-depth: 0;")
                if (!Array.from(folderItem.classList).includes("folderItem")) {
                    folderItem.classList.add("folderItem")
                }
            }
        })
    })
    
    //create collapsed library icon element
    const container = document.createElement("div")
    container.id = "collapsed-icon"
    container.innerHTML = `
        <span aria-hidden="true" class="IconWrapper__Wrapper-sc-16usrgb-0 Wrapper-medium-leading">
            <svg data-encore-id="icon" role="img" aria-hidden="true" viewBox="0 0 24 24" class="Svg-sc-ytk21e-0 Svg-img-icon-medium">
                <path d="M3 22a1 1 0 0 1-1-1V3a1 1 0 0 1 2 0v18a1 1 0 0 1-1 1zM15.5 2.134A1 1 0 0 0 14 3v18a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V6.464a1 1 0 0 0-.5-.866l-6-3.464zM9 2a1 1 0 0 0-1 1v18a1 1 0 1 0 2 0V3a1 1 0 0 0-1-1z">
                </path>
            </svg>
        </span>
    `
    document.querySelector(".main-rootlist-wrapper").prepend(container)

    //create css
    const styles = `
        #Desktop_LeftSidebar_Id {
            width: 65px !important;
            margin-top: -150px !important;
            transition: width 0.3s, margin-top 0.3s !important;
            z-index: 12 !important;
        }
        #collapsed-icon {
            padding-left: 20px !important;
            padding-right: 20px !important;
            padding-bottom: 10px !important;
            visibility: visible !important;
        }
        .main-yourLibraryX-header {visibility: hidden !important; transition: visibility 0.1s !important;}
        .main-yourLibraryX-filterArea {visibility: hidden !important; transition: visibility 0.1s !important;}
        .main-yourLibraryX-libraryFilter {visibility: hidden !important; transition: visibility 0.1s !important;}

        #Desktop_LeftSidebar_Id:hover {
            width: 280px !important;
            margin-top: 0px !important;
        }
        #Desktop_LeftSidebar_Id:hover #collapsed-icon {
            visibility: hidden !important;
            height: 0px !important;
            padding: 0px !important;
        }
        #Desktop_LeftSidebar_Id:hover .main-yourLibraryX-header {visibility: visible !important;}
        #Desktop_LeftSidebar_Id:hover .main-yourLibraryX-filterArea {visibility: visible !important;}
        #Desktop_LeftSidebar_Id:hover .main-yourLibraryX-libraryFilter {visibility: visible !important;}

        :root {
            margin-left: -3px !important;
        }
        svg[data-encore-id='icon']{
            overflow: visible !important;
        }
        #Desktop_LeftSidebar_Id span {
            white-space: nowrap !important;
        }
        .main-yourLibraryX-libraryRootlist {
            padding: 0px !important;
        }
        .os-scrollbar-vertical {
            visibility: hidden !important;
            width: 0px !important;
        }
        .LayoutResizer__resize-bar {
            visibility: hidden !important;
            width: 0px !important;
        }
    `
    const stylesheet = document.createElement("style")
    stylesheet.textContent = styles
    document.head.appendChild(stylesheet)
})();