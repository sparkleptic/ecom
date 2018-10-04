import React from 'react';
import {
        AppRegistry, Navigator, StyleSheet, Text, View, Platform, Dimensions
} from 'react-native'
import { Scene, Router, TabBar, Modal, Schema, Actions, Reducer, ActionConst } from 'react-native-router-flux'
var { height, width } = Dimensions.get('window');
import {
        TabIcon,
        NavBar,
        SearchBoxWithBackBtn,
        NavBarSearchBox,
        SearchBtnIcon,
        SearchPage,
        HeaderNew, Promotionbar
} from './components/common'

//Scenes
import {
        ShopTabRootScreen,
        FeedView
} from './screens/ShopTab';

import {
        CategoryTabRootScreen
} from './screens/CategoryTab';

import Category from './screens/Category'

import {
        NotificationEmptyView
} from './screens/NotificationTab'

import {
        AccountTabRootScreen
} from './screens/AccountTab'
import ProductDetailModal from './screens/ProductDetailModal'

import { CartDefault, ShippingInfoModal } from './screens/Cart'


import SignInScreen from './screens/Account/SignInScreen'
import LiveLocation from './screens/LiveLocation/Livemap'
import RegisterScreen from './screens/Account/RegisterScreen'
import AccountDetail from './screens/Account/AccountDetail'
import SideMenuDrawer from './screens/SideMenuDrawer'
import Checkout from './screens/Checkout/Checkout'

//import TabIcon from './components/common/TabIcon'

const reducerCreate = params => {
        const defaultReducer = Reducer(params);
        return (state, action) => {
                console.log("ACTION:", action);
                return defaultReducer(state, action);
        }
};

export default class RootRouter extends React.Component {
        constructor(props) {
                super(props)
        }
        getSceneStyle(props, computedProps) {
                const style = {
                };
                if (computedProps.isActive) {
                        style.paddingTop = computedProps.hideNavBar ? 0 : 54;
                        style.paddingBottom = computedProps.hideTabBar ? 0 : 70;
                }
                return style
        }
        render() {
                const heightNav = Platform.OS === 'android' ? 40 : 20;
                const marginTopNav = Platform.OS === 'android' ? 0 : -20;
                const hideNav = Platform.OS === 'android' ? true : false;
                return <Router createReducer={reducerCreate} getSceneStyle={this.getSceneStyle}>
                        <Scene key="root">
                                <Scene key="tabbar" tabs={true} tabBarStyle={{ height: 60, backgroundColor: "#fff" }}>
                                        <Scene key="ShopTabRootScreen"
                                                initial={true}
                                                icon={TabIcon}
                                                title="SHOP"
                                                titleStyle={{ color: '#fff' }}
                                                leftButtonIconStyle={{ tintColor: '#444' }}
                                                iconName="handbag"
                                                hideNavBar={true}
                                                navigationBarStyle={{
                                                        flex: 1,
                                                        borderBottomWidth: 0,
                                                        backgroundColor: "#E3868F",
                                                        marginTop: Platform.OS === 'android' ? 0 : -20,
                                                        height: Platform.OS === 'android' ? 54 : 74
                                                }}
                                                backButtonTextStyle={{ color: "#fff" }}
                                        >
                                                <Scene key="ShopTabView"
                                                        component={ShopTabRootScreen}
                                                        hideTabBar={false}
                                                        navBar={HeaderNew}
                                                />
                                                <Scene key="ProductDetailModal"
                                                        passProps={true}
                                                        // backTitle="X"
                                                        hideBackImage={false}
                                                        component={ProductDetailModal}
                                                        title="Product"
                                                        direction="vertical"
                                                        onBack={() => Actions.pop()}
                                                        hideNavBar={false}
                                                        hideTabBar={true}
                                                />
                                        </Scene>
                                        <Scene key="CategoryTabView"
                                                icon={TabIcon}
                                                title="CATEGORY"
                                                titleStyle={{ color: '#fff' }}
                                                leftButtonIconStyle={{ tintColor: 'white' }}
                                                iconName="tag"
                                                hideNavBar={false}
                                                navigationBarStyle={{
                                                        flex: 1,
                                                        borderBottomWidth: 0,
                                                        backgroundColor: "#fff",
                                                        marginTop: Platform.OS === 'android' ? 0 : -20,
                                                        height: Platform.OS === 'android' ? 54 : 74
                                                }}
                                                backButtonTextStyle={{ color: "#fff" }}
                                        >
                                                <Scene key="CategoryTabRootScreen"
                                                        component={CategoryTabRootScreen}
                                                        navBar={NavBarSearchBox}
                                                />
                                                <Scene key="Category"
                                                        component={Category}
                                                        title="Category"
                                                        onBack={() => Actions.pop()}
                                                        navigationBarStyle={{
                                                                flex: 1,
                                                                borderBottomWidth: 0,
                                                                backgroundColor: "#E3868F",
                                                                marginTop: Platform.OS === 'android' ? 0 : -20,
                                                                height: Platform.OS === 'android' ? 54 : 74
                                                        }}
                                                />
                                        </Scene>
                                        <Scene key="CartTabRootScreen"
                                                icon={TabIcon}
                                                title="CART"
                                                titleStyle={{ color: '#fff' }}
                                                leftButtonIconStyle={{ tintColor: 'white' }}
                                                iconName="basket"
                                                hideNavBar={false}
                                                navigationBarStyle={{
                                                        flex: 1,
                                                        borderBottomWidth: 0,
                                                        backgroundColor: "#E3868F",
                                                        marginTop: Platform.OS === 'android' ? 0 : -20,
                                                        height: Platform.OS === 'android' ? 54 : 74
                                                }}
                                                backButtonTextStyle={{ color: "#fff" }}
                                        >
                                                <Scene key="CartScreen"
                                                        component={CartDefault}
                                                        hideTabBar={true}
                                                        title="CART"
                                                        leftTitle="Keep"
                                                        leftButtonTextStyle={{ color: '#fff' }}
                                                        onLeft={() => Actions.Category()}
                                                        sceneStyle={{
                                                                paddingBottom: 0
                                                        }}
                                                />
                                                <Scene key="ShippingInfoModal"
                                                        hideTabBar={true}
                                                        title="Shipping"
                                                        component={ShippingInfoModal}
                                                />
                                        </Scene>
                                        <Scene key="MyAccountTabRootView"
                                                icon={TabIcon}
                                                title="You"
                                                titleStyle={{ color: '#fff' }}
                                                backButtonTextStyle={{ color: "#fff" }}
                                                leftButtonIconStyle={{ tintColor: 'white' }}
                                                iconName="user"
                                                hideNavBar={true}
                                                navigationBarStyle={{
                                                        flex: 1,
                                                        borderBottomWidth: 0,
                                                        backgroundColor: "#fff",
                                                        marginTop: Platform.OS === 'android' ? 0 : -20,
                                                        height: 0
                                                }}
                                        >
                                                <Scene key="MyAccountTabView"
                                                        component={SignInScreen}
                                                        icon={TabIcon}
                                                        title="Account"
                                                        iconName="user"
                                                />
                                                <Scene key="SignInScreen"
                                                        component={SignInScreen}
                                                        title="Sign in"
                                                        hideBackImage={true}
                                                />
                                                <Scene key="RegisterScreen"
                                                        component={RegisterScreen}
                                                        hideNavBar={true}
                                                        onBack={() => Actions.pop()}
                                                        title='Register'
                                                />
                                                <Scene key="AccountDetail"
                                                        component={AccountDetail}
                                                        title="My Account"
                                                        hideNavBar={true}
                                                        hideBackImage={true}
                                                />
                                        </Scene>
                                        <Scene key="GiftCards"
                                                icon={TabIcon}
                                                title="Gift"
                                                titleStyle={{ color: '#fff' }}
                                                backButtonTextStyle={{ color: "#fff" }}
                                                leftButtonIconStyle={{ tintColor: 'white' }}
                                                iconName="user"
                                                hideNavBar={true}
                                                component={LiveLocation}
                                                navigationBarStyle={{
                                                        flex: 1,
                                                        borderBottomWidth: 0,
                                                        backgroundColor: "#fff",
                                                        marginTop: Platform.OS === 'android' ? 0 : -20,
                                                        height: 0
                                                }}
                                        >
                                                {/* <Scene key="MyAccountTabView"
                                                        component={LiveLocation}
                                                        icon={TabIcon}
                                                        title="Account"
                                                        iconName="user"
                                                /> */}
                                        </Scene>
                                </Scene>
                                <Scene key="SearchPage"
                                        component={SearchPage}
                                        hideTabBar={false}
                                        animation={"fade"}
                                        duration={0}
                                        navBar={SearchBoxWithBackBtn}
                                />
                                <Scene key="Checkout"
                                        component={Checkout}
                                        hideTabBar={false}
                                        title="Ronda Rochell Checkout"
                                        animation={"fade"}
                                        duration={0}
                                        navBar={HeaderNew}
                                />
                                <Scene key="SideMenuDrawer"
                                        component={SideMenuDrawer}
                                        drawer={true}
                                        // hideTabBar={false}
                                        // animation={"fade"}
                                        // duration={0}
                                        // navBar={DrawerContent}
                                />
                        </Scene>
                </Router>;
        }
}
