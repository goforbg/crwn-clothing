import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import CollectionPage from '../collection/collection.component';
import WithSpinner from './../../components/with-spinner/with-spinner.component';

import { selectIsCollectionsLoading } from './../../redux/shop/shop.selector';

const mapStateToProps = createStructuredSelector({
   isLoading: selectIsCollectionsLoading,
});

const CollectionPageContainer = compose(
   connect(mapStateToProps),
   WithSpinner
)(CollectionPage);

export default CollectionPageContainer;
