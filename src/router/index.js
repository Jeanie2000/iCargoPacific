import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [

    // Views sections 
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/services',
      name: 'services',
      component: () => import('../views/Services.vue')
    },
    {
      path: '/partnership',
      name: 'partnership',
      component: () => import('../views/Partnership.vue')
    },
    {
      path: '/track',
      name: 'track',
      component: () => import('../views/Track.vue')
    },
    {
      path: '/instant',
      name: 'instant',
      component: () => import('../views/InstantQuote.vue')
    },



    //components sections
    {
      path: '/subnav',
      name: 'subnav',
      component: () => import('../components/SubNav.vue')
    },
    {
      path: '/mainnav',
      name: 'mainnav',
      component: () => import('../components/MainNav.vue')
    },
    {
      path: '/footer',
      name: 'footer',
      component: () => import('../components/Footer.vue')
    },


    // Authentication Signin section
    {
      path: '/signin',
      name: 'signin',
      component: () => import('../components/SignIn.vue')
    },
    {
      path: '/customer-signin',
      name: 'customer-signin',
      component: () => import('../views/CustomerSignIn.vue')
    },
    {
      path: '/merchant-signin',
      name: 'merchant-signin',
      component: () => import('../views/MerchantSignIn.vue')
    },
    {
      path: '/partner-signin',
      name: 'partner-signin',
      component: () => import('../views/PartnerSignIn.vue')
    },
    

   //Authetication Signup Section
    {
      path: '/signup',
      name: 'signup',
      component: () => import('../components/SignUp.vue')
    },
    {
      path: '/customer-signup',
      name: 'customer-signup',
      component: () => import('../views/CustomerSignUp.vue')
    },
    {
      path: '/merchant-signup',
      name: 'merchant-signup',
      component: () => import('../views/MerchantSignUp.vue')
    },
    {
      path: '/partner-signup',
      name: 'partner-signup',
      component: () => import('../views/PartnerSignUp.vue')
    },


    // Dashboard Area
    {
      path: '/sidenav',
      name: 'sidenav',
      component: () => import('../components/SideNav.vue')
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: () => import('../views/Dashboard.vue')
    },
    {
      path: '/order',
      name: 'order',
      component: () => import('../views/Order.vue')
    },
    {
      path: '/accepted',
      name: 'accepted',
      component: () => import('../views/AcceptedOrder.vue')
    },
    {
      path: '/track-orders',
      name: 'track-orders',
      component: () => import('../views/TrackOrders.vue')
    },
    {
      path: '/transaction',
      name: 'transaction',
      component: () => import('../views/Transaction.vue')
    },
    {
      path: '/shipment',
      name: 'shipment',
      component: () => import('../views/Shipment.vue')
    },
    {
      path: '/intransit',
      name: 'intransit',
      component: () => import('../views/InTransit.vue')
    },
    {
      path: '/pending',
      name: 'pending',
      component: () => import('../views/Pending.vue')
    },
    {
      path: '/delivered',
      name: 'delivered',
      component: () => import('../views/Delivered.vue')
    },
    {
      path: '/cancelled',
      name: 'cancelled',
      component: () => import('../views/Cancelled.vue')
    },
    {
      path: '/staff',
      name: 'staff',
      component: () => import('../views/Staff.vue')
    },
    {
      path: '/vehicles',
      name: 'vehicles',
      component: () => import('../views/Vehicle.vue')
    },
    {
      path: '/serviceable',
      name: 'serviceable',
      component: () => import('../views/Serviceable.vue')
    },
    {
      path: '/billandcharge',
      name: 'billandcharge',
      component: () => import('../views/BillingCharges.vue')
    },
    {
      path: '/userprofile',
      name: 'userprofile',
      component: () => import('../views/UserProfile.vue')
    },
   
   
    //Modals//
    {
      path: '/orderdetailsmodal',
      name: 'orderdetailsmodal',
      component: () => import('../components/OrderDetailsModal.vue')
    },
    {
      path: '/intransitmodal',
      name: 'intransitmodal',
      component: () => import('../components/InTransitModal.vue')
    },
    {
      path: '/pendingmodal',
      name: 'pendingmodal',
      component: () => import('../components/PendingModal.vue')
    },
    {
      path: '/deliveredmodal',
      name: 'deliveredmodal',
      component: () => import('../components/DeliveredModal.vue')
    },
    {
      path: '/cancelledmodal',
      name: 'cancelledmodal',
      component: () => import('../components/CancelledModal.vue')
    },
    {
      path: '/addstaffmodal',
      name: 'addstaffmodal',
      component: () => import('../components/AddStaffModal.vue')
    },
    {
      path: '/editstaffmodal',
      name: 'editstaffmodal',
      component: () => import('../components/EditStaffModal.vue')
    },
    {
      path: '/addvehiclemodal',
      name: 'addvehiclemodal',
      component: () => import('../components/AddVehicleModal.vue')
    },
    {
      path: '/editvehiclemodal',
      name: 'editvehiclemodal',
      component: () => import('../components/EditVehicleModal.vue')
    },
    {
      path: '/addserviceablemodal',
      name: 'addserviceablemodal',
      component: () => import('../components/AddServiceableModal.vue')
    },
    {
      path: '/editservicesablemodal',
      name: 'editserviceablemodal',
      component: () => import('../components/EditServiceableModal.vue')
    },
    {
      path: '/addratemodal',
      name: 'addratemodal',
      component: () => import('../components/AddRateModal.vue')
    },
    {
      path: '/updateratemodal',
      name: 'updateratemodal',
      component: () => import('../components/UpdateRatesModal.vue')
    },
    {
      path: '/userdetailsmodal',
      name: 'userdetailsmodal',
      component: () => import('../components/UserDetailsModal.vue')
    },
    
  ]
})

export default router
