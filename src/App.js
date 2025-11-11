import React from 'react';
import './App.css';

import {
  FaBars, FaSearch, FaBell, FaMoon, FaHome, FaBox,
  FaBuilding, FaUsers, FaHospital, FaClipboardList,
  FaInfoCircle, FaNewspaper, FaBalanceScale, FaQuestionCircle,
  FaTrophy
} from 'react-icons/fa';
import { FaClipboardUser } from "react-icons/fa6";
import { RiStarSmileFill } from "react-icons/ri";
import { MdOutlineMedicalServices } from 'react-icons/md';
import { LuPackageOpen, LuDollarSign } from 'react-icons/lu';
import { SlCalender } from "react-icons/sl";
import { MdOutlinePendingActions, MdModelTraining, MdPolicy, MdCelebration } from "react-icons/md";
import { FaCartShopping, FaPlus } from "react-icons/fa6";
import { IoBookOutline, IoLaptopOutline } from "react-icons/io5";

function App() {
  const toggleSidebar = () => {
    const sidebar = document.getElementById('sidebar');
    const mainWrapper = document.getElementById('mainWrapper');

    if (sidebar) {
      sidebar.classList.toggle('collapsed');
    }
    if (mainWrapper) {
      mainWrapper.classList.toggle('expanded');
    }
  };

  return (
    <div className="App">
      <div className="header">
        <div className="header-left">
          <div className="menu-toggle" onClick={toggleSidebar}>
            <FaBars />
          </div>
          <div className="logo">
            <div className="logo-icon">
            <img src="https://med-flow-intranet.lovable.app/assets/curana-hub-logo-k-scgMwl.png" alt="Curana Hub" className="profile-img" />
            </div>
          </div>
        </div>

        <div className="search-bar">
          <span><FaSearch /></span>
          <input type="text" placeholder="Search apps, documents, people..." />
        </div>

        <div className="header-right">
          <div className="icon-btn">
            <span><FaBell /></span>
            <div className="badge">5</div>
          </div>
          <div className="icon-btn">
            <span><FaMoon /></span>
          </div>
          <div className="user-profile">
            <div className="user-info">
              <div className="user-name">Dr. Jane Doe</div>
            </div>
            <img
              src="data:image/jpeg;base64,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"
              className="profile-img"
              alt="User Profile"
            />
          </div>
        </div>
      </div>

      <div className="sidebar" id="sidebar">

        <div className='sidebar-content'> 
          <div className="nav-section">
            <div className="nav-item active">
              <span className="nav-icon"><FaHome /></span>
              <span className="nav-text">Home</span>
            </div>
          </div>

          <div className="nav-section">
            <div className="nav-item">
              <span className="nav-icon"><LuPackageOpen /></span>
              <span className="nav-text">My Resources</span>
            </div>
          </div>

          <div className="nav-section">
            <div className="nav-item" >
              <span className="nav-icon"><FaBuilding /></span>
              <span className="nav-text">Departments</span>
            </div>

            <div className="nav-item" >
              <span className="nav-icon"><FaUsers /></span>
              <span className="nav-text">People Department</span>
            </div>

            <div className="nav-item">
              <span className="nav-icon"><FaHospital /></span>
              <span className="nav-text">Providers</span>
            </div>

            <div className="nav-item">
              <span className="nav-icon"><FaClipboardList /></span>
              <span className="nav-text">Forms</span>
            </div>
          </div>

          <div className="nav-section">
            <div className="nav-item">
              <span className="nav-icon"><FaInfoCircle /></span>
              <span className="nav-text">About Curana</span>
            </div>

            <div className="nav-item">
              <span className="nav-icon"><FaNewspaper /></span>
              <span className="nav-text">News & Updates</span>
            </div>

            <div className="nav-item">
              <span className="nav-icon"><FaBalanceScale /></span>
              <span className="nav-text">Policies</span>
            </div>
          </div>

          <div className="nav-section">
            <div className="nav-item">
              <span className="nav-icon"><FaQuestionCircle /></span>
              <span className="nav-text">Help Center</span>
            </div>
          </div>
        </div>

        {/* --- NEW USER PROFILE FOOTER --- */}
        <div className="sidebar-footer">
          <div className="user-profile">
            <img
              src="data:image/jpeg;base64,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"
              className="profile-img"
              alt="User Profile"
            />
            <div className="user-info">
              <div className="user-name">Dr. Jane Doe</div>
              <div className="user-role-sidebar">Chief Medical Officer</div>
            </div>
          </div>
        </div>
        {/* --- END NEW USER PROFILE FOOTER --- */}
      </div>

      <div className="main-wrapper" id="mainWrapper">
        <div className="breadcrumb">
          <div className="breadcrumb-item">
            <span className="breadcrumb-link">Home</span>
          </div>
          <span className="breadcrumb-separator">›</span>
          <div className="breadcrumb-item">
            <span>Dashboard</span>
          </div>
        </div>

        <div className="welcome-banner">
          <h1>Welcome back, Dr. Doe! </h1>
          <p>Monday, November 3, 2025 • 9:42 AM</p>

        </div>

        <div className="quick-stats">
          <div className="stat-card">
            <div>
              <div className="stat-value">156</div>
              <div className="stat-label">Patients This Week</div>
            </div>
            <FaClipboardUser size="3em" fill='cadetblue' />
          </div>
          <div className="stat-card">
            <div>
              <div className="stat-value">94%</div>
              <div className="stat-label">Satisfaction Score</div>
            </div>
            <RiStarSmileFill size="3em" fill='rgb(139, 92, 246)' />
          </div>
          <div className="stat-card">
            <div>
              <div className="stat-value">3</div>
              <div className="stat-label">Meetings Today</div>
            </div>
            <SlCalender size="3em" fill='#c9c957' />
          </div>
          <div className="stat-card">
            <div>
              <div className="stat-value">2</div>
              <div className="stat-label">Pending Approvals</div>
            </div>
            <MdOutlinePendingActions size="3em" fill='rgb(59, 130, 246)' />
          </div>
        </div>

        <div className="application-section">
          <div className="section-header">
            <h2 className="section-title">My Applications</h2>
            <a href="#" className="section-action">Customize ⚙️</a>
          </div>
          <div className="app-grid">
            <div className="app-tile">
              <img src="https://curana-connect-portal.lovable.app/assets/epic-logo-B93Nntu1.png" alt="Epic EHR" className="app-icon" />
              <div className="app-name">Epic EHR</div>
            </div>
            <div className="app-tile">
              <img src="https://curana-connect-portal.lovable.app/assets/teams-logo-DiIuOZ_J.png" alt="Microsoft Teams" className="app-icon" ></img>
              <div className="app-name">Microsoft Teams</div>
            </div>
            <div className="app-tile">
              <img src="https://curana-connect-portal.lovable.app/assets/outlook-logo-BRrJb0Yz.png" alt="Outlook" className="app-icon" />
              <div className="app-name">Outlook</div>
            </div>
            <div className="app-tile">
              <img src="https://curana-connect-portal.lovable.app/assets/workday-logo-COSMSvye.png" alt="Workday" className="app-icon" />
              <div className="app-name">Workday</div>
            </div>
            <div className="app-tile">
              <img src="https://curana-connect-portal.lovable.app/assets/uptodate-logo-pzGTh8d9.png" alt="UpToDate" className="app-icon" />
              <div className="app-name">UpToDate</div>
            </div>
            <div className="app-tile">
              <img src="https://curana-connect-portal.lovable.app/assets/navan-logo-EGLO0z0q.png" alt="Navan Travel" className="app-icon" />
              <div className="app-name">Navan Travel</div>
            </div>
            <div className="app-tile">
              <img src="https://curana-connect-portal.lovable.app/assets/compliance-logo-CUCUm5LO.png" alt="Compliance Portal" className="app-icon" />
              <div className="app-name">Compliance Portal</div>
            </div>
            <div className="app-tile">
              <img src="https://curana-connect-portal.lovable.app/assets/perkspot-logo-CVtjcnAa.png" alt="PerkSpot" className="app-icon" />
              <div className="app-name">Perkspot</div>
            </div>
            <div className="app-tile">
              <FaCartShopping className="app-icon" />
              <div className="app-name">Curana Store</div>
            </div>
            <div className="app-tile">
              <FaPlus className="app-icon" />
              <div className="app-name">Add More Apps</div>
            </div>
          </div>
        </div>

        <div className="content-grid">
          <div>
            <div className="section">
              <div className="section-header">
                <h2 className="section-title">My Workspace</h2>
                <a href="#" className="section-action">View All</a>
              </div>
              <div className="workspace-item">
                <div className="workspace-icon" style={{ background: '#e6e6f9', color: 'var(--curana-blue)' }}><SlCalender /> </div>
                <div className="workspace-info">
                  <div className="workspace-title">Team Stand-up Meeting</div>
                  <div className="workspace-time">Today at 10:00 AM • Conference Room B</div>
                </div>
              </div>
              <div className="workspace-item">
                <div className="workspace-icon" style={{ background: '#fff0e6', color: 'var(--curana-orange)' }}><FaClipboardList /></div>
                <div className="workspace-info">
                  <div className="workspace-title">Q4 Clinical Review Document</div>
                  <div className="workspace-time">Last edited 2 hours ago</div>
                </div>
              </div>
              <div className="workspace-item">
                <div className="workspace-icon" style={{ background: '#f8e6fa', color: 'var(--curana-purple)' }}> <MdOutlinePendingActions /></div>
                <div className="workspace-info">
                  <div className="workspace-title">3 Pending Approvals</div>
                  <div className="workspace-time">Requires your attention</div>
                </div>
              </div>
              <div className="workspace-item">
                <div className="workspace-icon" style={{ background: '#e6f9f7', color: 'var(--curana-teal)' }}><MdModelTraining /></div>
                <div className="workspace-info">
                  <div className="workspace-title">HIPAA Compliance Training Due</div>
                  <div className="workspace-time">Due in 5 days</div>
                </div>
              </div>
            </div>

          </div>

          <div>
            <div className="widget">
              <div className="widget-title">Upcoming Events</div>
              <div className="event-item">
                <div className="event-title">All-Hands Town Hall Meeting</div>
                <div className="event-time"><SlCalender fill="red" /> Nov 8, 2025 • 2:00 PM</div>
              </div>
              <div className="event-item">
                <div className="event-title">Leadership Training Workshop</div>
                <div className="event-time"><SlCalender fill="red" />  Nov 12, 2025 • 9:00 AM</div>
              </div>
              <div className="event-item">
                <div className="event-title">Holiday Party Planning Committee</div>
                <div className="event-time"><SlCalender fill="red" />  Nov 15, 2025 • 4:00 PM</div>
              </div>
              <div className="event-item">
                <div className="event-title">Communication Workshop</div>
                <div className="event-time"><SlCalender fill="red" />  Nov 19, 2025 • 6:00 PM</div>
              </div>
            </div>

          </div>


        </div>

        <div className="section">
          <div className="section-header">
            <h2 className="section-title">Latest News & Announcements</h2>
            <a href="#" className="section-action">View All</a>
          </div>
          <div className="news-item">
            <div className="news-thumbnail"><FaTrophy fill='#862C8F' /></div>
            <div className="news-content">
              <div className="news-title">Curana Health Receives Quality Excellence Award</div>
              <div className="news-meta">Leadership Team • 2 hours ago • 3 min read</div>
              <div className="news-excerpt">We're proud to announce that Curana Health has been recognized for exceptional patient care quality...</div>
            </div>
          </div>
          <div className="news-item">
            <div className="news-thumbnail"><MdPolicy fill='#862C8F' /></div>
            <div className="news-content">
              <div className="news-title">Updated HIPAA Privacy Policy - Action Required</div>
              <div className="news-meta">Compliance Department • 5 hours ago • 5 min read</div>
              <div className="news-excerpt">Important updates to our HIPAA privacy policies. All staff members are required to review...</div>
            </div>
          </div>
          <div className="news-item">
            <div className="news-thumbnail"><MdCelebration fill='#862C8F' /></div>
            <div className="news-content">
              <div className="news-title">Employee Wellness Month Kicks Off!</div>
              <div className="news-meta">HR Department • Yesterday • 2 min read</div>
              <div className="news-excerpt">Join us for a month of wellness activities including fitness challenges and workshops...</div>
            </div>
          </div>
        </div>

        <div className="widget">
          <div className="widget-title">Quick Links</div>
          <div className='quick-links'>
            <div className="quick-link-workspace-item" style={{ padding: '8px', marginBottom: '4px' }}>
              <div className="quick-link-workspace-icon" style={{ background: '#e6e6f9' }}><IoBookOutline size="3em" fill="rgb(142 142 225)" /></div>
              <div className="quick-link-workspace-info">
                <div className="quick-link-workspace-title" style={{ fontSize: '13px' }}>Employee Handbook</div>
              </div>
            </div>
            <div className="quick-link-workspace-item" style={{ padding: '8px', marginBottom: '4px' }}>
              <div className="quick-link-workspace-icon" style={{ background: '#e6f9f7' }}><IoLaptopOutline size="3em" /></div>
              <div className="quick-link-workspace-info">
                <div className="quick-link-workspace-title" style={{ fontSize: '13px' }}>IT Support</div>
              </div>
            </div>
            <div className="quick-link-workspace-item" style={{ padding: '8px', marginBottom: '4px' }}>
              <div className="quick-link-workspace-icon" style={{ background: '#f8e6fa' }}><FaBalanceScale size="3em" /></div>
              <div className="quick-link-workspace-info">
                <div className="quick-link-workspace-title" style={{ fontSize: '13px' }}>Compliance Center</div>
              </div>
            </div>
            <div className="quick-link-workspace-item" style={{ padding: '8px', marginBottom: '4px' }}>
              <div className="quick-link-workspace-icon" style={{ background: 'rgb(241 211 201)' }}><LuDollarSign size="3em" /></div>
              <div className="quick-link-workspace-info">
                <div className="quick-link-workspace-title" style={{ fontSize: '13px' }}>Benefits</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;