import React from 'react';
import SideBarMenuSection from './SideBarMenuSection';

import '../../../css/sideBarMenu.css';

const SideBarMenu = props => (
  <div id={'sideBar_menu_container'}>
    <div styleName="main">
      <SideBarMenuSection title="Introduction" sectionElements={[]} linkToPath={'/'} />
      <SideBarMenuSection
        title="Foundations"
        sectionElements={[
          { name: 'Colors', linkToPath: '#' },
          { name: 'Typography', linkToPath: '#' }]}
      />
      <SideBarMenuSection
        title="Components"
        sectionElements={[
          { name: 'Button', linkToPath: '/button' },
          { name: 'Link', linkToPath: '/link' },
          { name: 'Share', linkToPath: '/shareDialog' },
          { name: 'Form Elements', linkToPath: '/formElements' },
          { name: 'Selection Elements', linkToPath: '/select' },
          { name: 'Modal', linkToPath: '/modal' }]}
      />
    </div>
  </div>
);


SideBarMenu.displayName = 'SideBarMenu';

export default SideBarMenu;
