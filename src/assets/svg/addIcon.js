import * as React from 'react';
import { SvgXml } from 'react-native-svg';

const addIcon = `
<svg width="43" height="31" viewBox="0 0 43 31" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M0.387288 5.88834C0.601582 2.98179 2.93745 0.689554 5.84585 0.501949C17.2949 -0.236564 25.5923 -0.10945 37.0638 0.553003C39.993 0.722164 42.3726 3.0053 42.5997 5.93066C43.1369 12.8485 43.1319 18.1501 42.5937 25.0749C42.3679 27.9806 40.019 30.2588 37.1104 30.4438C25.4929 31.1825 17.338 31.1865 5.86021 30.4494C2.94582 30.2622 0.597459 27.9719 0.381528 25.0595C-0.1287 18.1777 -0.127561 12.8714 0.387288 5.88834Z" fill="#A8D8FF"/>
    <g clip-path="url(#clip0_1747_42)">
        <path d="M28.0021 16.8292H22.0018V22.2295H20.0017V16.8292H14.0015V15.0291H20.0017V9.62891H22.0018V15.0291H28.0021V16.8292Z" fill="white"/>
    </g>
    <defs>
        <clipPath id="clip0_1747_42">
            <rect width="24.0011" height="21.601" fill="white" transform="translate(9.00049 5.12891)"/>
        </clipPath>
    </defs>
</svg>
`;

export default AddIcon => <SvgXml xml={addIcon} width="100%" height="100%" />;


