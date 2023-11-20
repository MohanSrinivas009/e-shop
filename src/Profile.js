import React from 'react'
import { useSelector } from "react-redux";
import "./Profile.css"
import Signin from './Signin'
function Profile() {
const userdata = useSelector((state) => state.Login);

return (
  <div className="Profile">
    {userdata.length === 0 ? (
      <Signin/>
    ) : (
      <div>
        <h1>Your Account</h1>
        <div className="ProfileContents">
          <li>
            <div className="item">
              <div>
                <h2>Your Orders</h2>
              </div>
              <div>
                <span>
                  Track, return, cancel an order, download invoice or buy again
                </span>
              </div>
            </div>
          </li>
          <li>
            <div className="item">
              <div>
                <h2>Login & Security</h2>
              </div>
              <div>
                <span>Edit login, name, and mobile number</span>
              </div>
            </div>
          </li>
          <li>
            <div className="item">
              <div>
                <h2>Prime</h2>
              </div>
              <div>
                <span>
                  Manage your membership, view benefits, and payment settings
                </span>
              </div>
            </div>
          </li>
          <li>
            <div className="item">
              <div>
                <h2>Your Address</h2>
              </div>
              <div>
                <span>Edit, remove or set default address</span>
              </div>
            </div>
          </li>
          <li>
            <div className="item">
              <div>
                <h2>Gift Card</h2>
              </div>
              <div>
                <span>
                  View balance or redeem a card, and purchase a new Gift Card
                </span>
              </div>
            </div>
          </li>
          <li>
            <div className="item">
              <div>
                <h2>Your Payments</h2>
              </div>
              <div>
                <span>
                  View all transactions, manage payment methods and settings
                </span>
              </div>
            </div>
          </li>
          <li>
            <div className="item">
              <div>
                <h2>Your Profiles</h2>
              </div>
              <div>
                <span>
                  Manage, add, or remove user profiles for personalized
                  experience
                </span>
              </div>
            </div>
          </li>
          <li>
            <div className="item">
              <div>
                <h2>Digital Services and Device</h2>
              </div>
              <div>
                <span>
                  Troubleshoot device issues, manage or cancel digital
                  subscriptions
                </span>
              </div>
            </div>
          </li>
          <li>
            <div className="item">
              <div>
                <h2>Archived Orders</h2>
              </div>
              <div>
                <span>View and manage your archived orders</span>
              </div>
            </div>
          </li>
          <li>
            <div className="item">
              <div>
                <h2>Your Lists</h2>
              </div>
              <div>
                <span>
                  View, modify, and share your lists, or create new ones
                </span>
              </div>
            </div>
          </li>
          <li>
            <div className="item">
              <div>
                <h2>Customer Services</h2>
              </div>
              <div>
                <span>
                  Browse self service options, help articles or contact us
                </span>
              </div>
            </div>
          </li>
          <li>
            <div className="item">
              <div>
                <h2>Your Messages</h2>
              </div>
              <div>
                <span>
                  View or respond to messages from Amazon, Sellers and Buyers
                </span>
              </div>
            </div>
          </li>
          <li>
            <div className="item">
              <div>
                <h2>Amazon Businesses</h2>
              </div>
              <div>
                <span>
                  Save with business-exclusive pricing, schedule fast deliveries
                  to business-hours, and more
                </span>
              </div>
            </div>
          </li>
        </div>
      </div>
    )}
  </div>
);
}

export default Profile