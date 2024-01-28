import { CSidebar, CSidebarBrand, CSidebarNav, CNavTitle, CNavItem, CBadge, CNavGroup } from "@coreui/react";
import {
    cilPuzzle,
    cilSpeedometer,
} from '@coreui/icons';
import CIcon from '@coreui/icons-react';
function AppSidebar() {
    return (
        <div>
            <CSidebar>
                <CSidebarBrand>Menu</CSidebarBrand>
                <CSidebarNav>
                    <CNavTitle>Nav Title</CNavTitle>
                    <CNavItem href="#">
                        <CIcon customClassName="nav-icon" icon={cilSpeedometer} />
                        Nav item
                    </CNavItem>
                    <CNavItem href="#">
                        <CIcon customClassName="nav-icon" icon={cilSpeedometer} />
                        With badge
                        <CBadge color="primary ms-auto">NEW</CBadge>
                    </CNavItem>
                    <CNavGroup toggler="Nav dropdown">
                        <CNavItem href="#">
                            <CIcon customClassName="nav-icon" icon={cilPuzzle} /> Nav dropdown item
                        </CNavItem>
                        <CNavItem href="#">
                            <CIcon customClassName="nav-icon" icon={cilPuzzle} /> Nav dropdown item
                        </CNavItem>
                    </CNavGroup>
                </CSidebarNav>
                {/* <CSidebarToggler /> */}
            </CSidebar>
        </div>
    );
}


export default AppSidebar;
