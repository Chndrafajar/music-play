import Autehnticated from "@/Layouts/Autehnticated/Index";
import SubscriptionCard from "@/Layouts/Autehnticated/SubscriptionCard";
import React from "react";

export default function SubscriptionPlan() {
    return (
        <>
            <Autehnticated>
                <div className="subscription">
                    <div className="items-subs">
                        <h5>Pricing For Everyone</h5>
                        <p>
                            Invest your little money to get a <br /> whole new
                            experiences from songs
                        </p>
                    </div>
                </div>
                <div className="subscription-items">
                    {/* Basic */}
                    <SubscriptionCard
                        name="Basic"
                        price={299000}
                        durationInMonth={3}
                        features={["Feature 1", "Feature 2", "Feature 3"]}
                    />
                    {/* Premium */}
                    <SubscriptionCard
                        isPremium
                        name="Premium"
                        price={899000}
                        durationInMonth={6}
                        features={["Feature 1", "Feature 2", "Feature 3"]}
                    />
                </div>
            </Autehnticated>
        </>
    );
}
