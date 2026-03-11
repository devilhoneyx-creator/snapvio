import React from 'react';

const Disclaimer = () => {
  return (
    <div className="max-w-[800px] mx-auto px-4 py-16 text-slate-300">
      <h1 className="text-3xl md:text-5xl font-extrabold text-[#10b981] mb-8 border-b border-slate-700 pb-4">Disclaimer</h1>
      
      <p className="mb-6 text-lg font-medium text-white">
        If you require any more information or have any questions about our site's disclaimer, please feel free to contact us.
      </p>

      <div className="bg-[#1e293b] border-l-4 border-[#10b981] p-6 rounded-r-lg mb-8 shadow-md">
        <h2 className="text-xl font-bold text-white mb-3">Crucial Copyright Notice</h2>
        <p className="text-slate-300 leading-relaxed mb-4">
          Snapvio is a strictly utilitarian tool intended solely for downloading <strong>publicly available, non-copyrighted media</strong> or media for which the user holds explicit permission from the original owner. We strongly oppose piracy and intellectual property theft.
        </p>
        <p className="text-slate-300 leading-relaxed">
          The user assumes full legal responsibility for any media they choose to download. Snapvio does NOT host any media on its servers. We merely provide a service that extracts direct links to media files already hosted on third-party servers.
        </p>
      </div>

      <h2 className="text-xl font-bold text-white mt-8 mb-4">General Disclaimer</h2>
      <p className="mb-6 leading-relaxed">
        All the information on this website is published in good faith and for general information purpose only. Snapvio does not make any warranties about the completeness, reliability and accuracy of this information. Any action you take upon the information you find on this website (Snapvio), is strictly at your own risk. Snapvio will not be liable for any losses and/or damages in connection with the use of our website.
      </p>

      <h2 className="text-xl font-bold text-white mt-8 mb-4">External Links</h2>
      <p className="mb-6 leading-relaxed">
        From our website, you can visit other websites by following hyperlinks to such external sites. While we strive to provide only quality links to useful and ethical websites, we have no control over the content and nature of these sites. These links to other websites do not imply a recommendation for all the content found on these sites. Site owners and content may change without notice and may occur before we have the opportunity to remove a link which may have gone 'bad'.
      </p>

      <h2 className="text-xl font-bold text-white mt-8 mb-4">Consent</h2>
      <p className="mb-6 leading-relaxed">
        By using our website, you hereby consent to our disclaimer and agree to its terms.
      </p>

      <h2 className="text-xl font-bold text-white mt-8 mb-4">Update</h2>
      <p className="mb-6 leading-relaxed">
        Should we update, amend or make any changes to this document, those changes will be prominently posted here.
      </p>
    </div>
  );
};

export default Disclaimer;
