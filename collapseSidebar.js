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

    const styles = `
        #Desktop_LeftSidebar_Id {
            width: 65px !important;
            margin-top: -150px !important;
            transition: width 0.3s, margin-top 0.3s !important;
            z-index: 12 !important;
        }
        .main-yourLibraryX-header {visibility: hidden !important; transition: visibility 0.2s !important;}
        .main-yourLibraryX-filterArea {visibility: hidden !important; transition: visibility 0.2s !important;}
        .main-yourLibraryX-libraryFilter {visibility: hidden !important; transition: visibility 0.2s !important;}

        #Desktop_LeftSidebar_Id:hover {
            width: 280px !important;
            margin-top: 0px !important;
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