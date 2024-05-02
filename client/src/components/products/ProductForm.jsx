import { useContext, useState } from 'react';
import { ProductContext } from '../../Contexts/ProductContext';
const ProductForm = () => {
  const { addProduct } = useContext(ProductContext);
  const [formData, setFormData] = useState({
    title: '',
    description: {
      overview: '',
      spec: {
        frame: '',
        fork: '',
        gears: '',
        brakes: '',
        tires: '',
        saddle: '',
        handlebar: '',
      },
    },
    category: '',
    brand: '',
    image: '',
    startingBid: 0,
    auctionEndDate: '',
  });
  const [auctionAdded, setAuctionAdded] = useState(false);
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleDescriptionChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      description: {
        ...formData.description,
        [name]: value,
      },
    });
  };

  const handleSpecInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      description: {
        ...formData.description,
        spec: {
          ...formData.description.spec,
          [name]: value,
        },
      },
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    await addProduct(formData);
    setFormData({
      title: '',
      description: {
        overview: '',
        spec: {
          frame: '',
          fork: '',
          gears: '',
          brakes: '',
          tires: '',
          saddle: '',
          handlebar: '',
        },
      },
      category: '',
      brand: '',
      image: '',
      startingBid: 0,
      auctionEndDate: '',
    });
    setAuctionAdded(true);
  };

  return (
    <div className='container mx-auto mt-4  font-sans'>
      <div className='grid grid-cols-2 gap-4 '>
        <div className='container p-10'>
          <h1 className='text-3xl text-white font-bold mb-4'>
            Create a New Product listing
          </h1>
          <p className='text-zinc-200 text-2xl leading-10 mb-4'>
            Welcome! By listing your product here, you can reach potential
            buyers looking for high-quality items. Fill out the form below with
            detailed information about your product to attract interested
            buyers.
          </p>
          <p className='text-3xl text-orange-400 font-bold'>
            Benefits of Listing:
          </p>
          <ul className='list-disc pl-6 mb-4 text-xl text-zinc-100 leading-10'>
            <li>
              Showcase your product to a wide audience of interested buyers.
            </li>
            <li>
              Set your starting bid and auction end date to control the sale.
            </li>
            <li>Provide detailed descriptions to attract the right buyers.</li>
            <li>Engage with potential buyers through your product listing.</li>
            <li>
              Maximize your products visibility and potential selling price.
            </li>
          </ul>
          <p className='text-xl'>
            Fill out the form with accurate details to create an effective
            listing that captures the attention of buyers and leads to a
            successful auction.
          </p>
        </div>

        <div>
          <form onSubmit={handleSubmit} className='grid grid-cols-1 gap-4'>
            <label className='col-span-1'>
              Title:
              <input
                type='text'
                name='title'
                value={formData.title}
                onChange={handleInputChange}
                className='input input-bordered w-full'
              />
            </label>

            <label className='col-span-1'>
              Overview:
              <textarea
                name='overview'
                value={formData.description.overview}
                onChange={handleDescriptionChange}
                className='textarea h-32 input input-bordered w-full'
              />
            </label>

            <label className='col-span-1'>
              Frame:
              <input
                type='text'
                name='frame'
                value={formData.description.spec.frame}
                onChange={handleSpecInputChange}
                className='input input-bordered w-full'
              />
            </label>

            <label className='col-span-1'>
              Fork:
              <input
                type='text'
                name='fork'
                value={formData.description.spec.fork}
                onChange={handleSpecInputChange}
                className='input input-bordered w-full'
              />
            </label>

            <label className='col-span-1'>
              Gears:
              <input
                type='text'
                name='gears'
                value={formData.description.spec.gears}
                onChange={handleSpecInputChange}
                className='input input-bordered w-full'
              />
            </label>

            <label className='col-span-1'>
              Brakes:
              <input
                type='text'
                name='brakes'
                value={formData.description.spec.brakes}
                onChange={handleSpecInputChange}
                className='input input-bordered w-full'
              />
            </label>

            <label className='col-span-1'>
              Tires:
              <input
                type='text'
                name='tires'
                value={formData.description.spec.tires}
                onChange={handleSpecInputChange}
                className='input input-bordered w-full'
              />
            </label>

            <label className='col-span-1'>
              Saddle:
              <input
                type='text'
                name='saddle'
                value={formData.description.spec.saddle}
                onChange={handleSpecInputChange}
                className='input input-bordered w-full'
              />
            </label>

            <label className='col-span-1'>
              Handlebar:
              <input
                type='text'
                name='handlebar'
                value={formData.description.spec.handlebar}
                onChange={handleSpecInputChange}
                className='input input-bordered w-full'
              />
            </label>

            <label className='col-span-1'>
              Category:
              <select
                name='category'
                value={formData.category}
                onChange={handleInputChange}
                className='select select-bordered w-full'
              >
                <option value=''>Välj kategori...</option>
                <option value='Racer'>Racer</option>
                <option value='MTB'>MTB</option>
                <option value='Gravel'>Gravel</option>
                <option value='Beginners'>Beginners</option>
              </select>
            </label>

            <label className='col-span-1'>
              Brand:
              <input
                type='text'
                name='brand'
                value={formData.brand}
                onChange={handleInputChange}
                className='input input-bordered w-full'
              />
            </label>

            <label className='col-span-1'>
              Image URL:
              <input
                type='text'
                name='image'
                value={formData.image}
                onChange={handleInputChange}
                className='input input-bordered w-full'
              />
            </label>

            <label className='col-span-1'>
              Starting Bid:
              <input
                type='number'
                name='startingBid'
                value={formData.startingBid}
                onChange={handleInputChange}
                className='input input-bordered w-full'
              />
            </label>

            <label className='col-span-1'>
              Auction End Date:
              <input
                type='date'
                name='auctionEndDate'
                value={formData.auctionEndDate}
                onChange={handleInputChange}
                className='input input-bordered w-full'
              />
            </label>

            <button
              type='submit'
              className='mb-10 btn bg-orange-500 text-white hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-black-500'
            >
              Submit
            </button>
            {auctionAdded && (
              <p className='text-green-600 mt-2 mb-10'>
                Auction successfully added!
              </p>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default ProductForm;
