import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import CollectionsOverview from '../../components/collections-overview/collections-overview.component';
import WithSpinner from './../../components/with-spinner/with-spinner.component';

import { selectIsCollectionsFetching } from './../../redux/shop/shop.selector';

const mapStateToProps = createStructuredSelector({
   isLoading: selectIsCollectionsFetching,
});

const CollectionsOverviewContainer = compose(
   connect(mapStateToProps),
   WithSpinner
)(CollectionsOverview);

export default CollectionsOverviewContainer;
