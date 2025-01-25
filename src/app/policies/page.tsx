export default function Page(){
    return (
    <div className="site">
        <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
            <div className="container w-full mx-auto py-8 px-8">
            <h1 className="font-black text-4xl py-8">Policies, Terms and Conditions</h1>
           
            <p>
            <h3 className="font-bold text-md">What's your return policy?</h3>
            <br />
            <p className="font-normal">We don't offer returns and exchanges, but if there's something wrong with your order, please let us know by contacting us at [insert your support email here]!</p>
            <br />
            <h3 className="font-bold text-md">Do you offer refunds?</h3>
            <br />
            <p className="font-normal">Refunds are only offered to customers that receive the wrong items or damaged items. If any of these apply, please contact us at [insert your support email here] with photos of wrong/damaged items and we'll sort that out for you.</p>
            <br />
            <h3 className="font-bold text-md">Can I exchange an item for a different size/color?</h3>
            <br />
            <p className="font-normal">At this time, we don't offer exchanges. If you're unsure which size would fit better, check out our sizing charts—we have one for every item listed on our store, in the product description section. Though rare, it's possible that an item you ordered was mislabelled. If that's the case, please let us know at [insert your support email here] within a week after receiving your order. Include your order number and photos of the mislabeled item, and we'll send you a new one, or issue a refund!</p>
            </p>
        </div>
        </main>
    </div>
    );
}
