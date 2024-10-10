// NAME: Collapse Sidebar
// AUTHOR: Isbo
// DESCRIPTION: Expand sidebar on hover

/// <reference path="../globals.d.ts" />

(function collapseSidebar() {
    function loop() {
        const folderItems = Array.from(document.getElementsByClassName("main-yourLibraryX-listItem"))

        if (Object.keys(folderItems).length == 0) {
            setTimeout(loop, 100);
            return
        }

        folderItems.forEach(folderItem => {
            if (folderItem.getAttribute("style") == "--ylx-folder-depth: 1;") {
                folderItem.setAttribute("style", "--ylx-folder-depth: 0;")
                folderItem.classList.add("folderItem")
            }
        })

        const hoverFolderItems = Array.from(document.querySelectorAll("#Desktop_LeftSidebar_Id:hover .main-yourLibraryX-listItem"))

        if (Object.keys(hoverFolderItems).length == 0) {
            setTimeout(loop, 100);
            return
        }

        hoverFolderItems.forEach(hoverFolderItem => {
            if (Array.from(hoverFolderItem.classList).includes("folderItem")) {
                hoverFolderItem.setAttribute("style", "--ylx-folder-depth: 1;")
                hoverFolderItem.classList.remove("folderItem")
            }
        })

        setTimeout(loop, 100);
    }

    const styles = `
        #Desktop_LeftSidebar_Id {
            width: 65px !important;
            margin-top: -150px !important;
            transition: width 0.3s, margin-top 0.3s !important;
            z-index: 12 !important;
        }
        .main-yourLibraryX-libraryRootlist {
            padding: 0px !important;
        }
        .main-yourLibraryX-header {visibility: hidden !important; transition: visibility 0.1s !important;}
        .main-yourLibraryX-filterArea {visibility: hidden !important; transition: visibility 0.1s !important;}
        .main-yourLibraryX-libraryFilter {visibility: hidden !important; transition: visibility 0.1s !important;}

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
    loop()
})();