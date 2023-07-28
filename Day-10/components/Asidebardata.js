import React from 'react';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import PublishedWithChangesIcon from '@mui/icons-material/PublishedWithChanges';
import ViewQuiltIcon from '@mui/icons-material/ViewQuilt';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import AssessmentIcon from '@mui/icons-material/Assessment';
import EditCalendarIcon from '@mui/icons-material/EditCalendar';

export const ASidebarData = [
    {
        title: 'Profile',
        path:'/profile1',
        icon: <AccountCircleIcon/>,
    },
    {
        title: 'Resource',
        path:'/Aresource',
        icon: <GroupAddIcon/>,
    },
    {
        title: 'Task',
        path:'/Pompletion',
        icon: <FormatListBulletedIcon/>,
    },
    {
        title: 'Status',
        path:'/Empmanagement',
        icon: < PublishedWithChangesIcon/>,
    },
    {
        title: 'Project',
        path:'/Aproject',
        icon: <ViewQuiltIcon/>,
    },
    {
        title: 'Achievements',
        path:'/Reports',
        icon: <EmojiEventsIcon/>,
    },
    {
        title: 'BasicDateCalendar',
        path:'/calendar',
        icon: <CalendarMonthIcon/>,
    },
    {
        title: 'Todo',
        path:'/Todo',
        icon: <EditCalendarIcon />,
    },
    {
        title: 'Report',
        path:'/Report',
        icon: < AssessmentIcon />,
    },
]