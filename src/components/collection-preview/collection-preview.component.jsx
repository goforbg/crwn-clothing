import React from 'react';

import CollectionItem from '../collection-item/collection-item.component';

import {
   CollectionPreviewContainer,
   TitleContainer,
   PreviewContainer,
} from './collection-preview.styles';

const CollectionPreview = (props) => {
   const { title, items, match, history, routeName } = props;
   console.log('CollectionPreview', props);

   return (
      <CollectionPreviewContainer>
         <TitleContainer
            onClick={() => history.push(`${match.path}/${routeName}`)}
         >
            {title.toUpperCase()}
         </TitleContainer>
         <PreviewContainer>
            {items
               .filter((item, idx) => idx < 4)
               .map((item) => (
                  <CollectionItem key={item.id} item={item} />
               ))}
         </PreviewContainer>
      </CollectionPreviewContainer>
   );
};

export default CollectionPreview;
