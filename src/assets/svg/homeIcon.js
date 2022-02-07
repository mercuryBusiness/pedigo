import * as React from 'react';
import { SvgXml } from 'react-native-svg';

const homeIcon = `
<svg width="19" height="18" viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M17.35 7.92065L10.58 1.43065C10.2872 1.15647 9.90109 1.00391 9.49997 1.00391C9.09885 1.00391 8.71275 1.15647 8.41997 1.43065L1.64997 7.92065C1.58123 7.98896 1.53477 8.07648 1.51671 8.17169C1.49865 8.26691 1.50983 8.36536 1.54879 8.45409C1.58775 8.54283 1.65266 8.6177 1.73497 8.66885C1.81729 8.71999 1.91316 8.74502 2.00997 8.74065H2.28997V16.0606C2.30528 16.3153 2.41736 16.5545 2.60326 16.7293C2.78916 16.904 3.03483 17.0011 3.28997 17.0007H7.09997C7.22388 17.0008 7.34304 16.9529 7.4325 16.8672C7.52197 16.7815 7.57481 16.6645 7.57997 16.5407V13.0007C7.55744 12.5059 7.72693 12.0217 8.05304 11.649C8.37914 11.2763 8.83665 11.044 9.32997 11.0007C9.58975 10.9714 9.85277 10.9966 10.1022 11.0748C10.3517 11.1529 10.5821 11.2822 10.7788 11.4544C10.9755 11.6266 11.1341 11.838 11.2445 12.0749C11.3549 12.3119 11.4147 12.5693 11.42 12.8307V16.5107C11.4251 16.6345 11.478 16.7515 11.5674 16.8372C11.6569 16.9229 11.7761 16.9708 11.9 16.9706H15.73C15.9851 16.9711 16.2308 16.874 16.4167 16.6993C16.6026 16.5245 16.7147 16.2853 16.73 16.0307V8.74065H17.01C17.1051 8.74088 17.1981 8.71286 17.2773 8.66013C17.3564 8.6074 17.4181 8.53235 17.4545 8.4445C17.491 8.35664 17.5005 8.25995 17.4819 8.16668C17.4632 8.07342 17.4173 7.98778 17.35 7.92065V7.92065Z" stroke="#161616" stroke-width="1.5" stroke-miterlimit="10"/>
</svg>
`;

export default HomeIcon => <SvgXml xml={homeIcon} width="100%" height="100%" />;
