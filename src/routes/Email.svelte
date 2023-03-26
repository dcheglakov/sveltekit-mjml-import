<script>
  export let title;
  export let preview;
  export let content;
</script>

<mjml lang="en">
  <mj-head>
    <mj-title>{title}</mj-title>
    <mj-preview>{preview}</mj-preview>
    <mj-font
      name="IBM Plex Sans"
      href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@400;600&display=swap"
    />
    <mj-style>
      {`.content a {
        	  color: #eb0000 !important;
        	  text-decoration: none !important;
      		}
			.content a:hover {
        	  text-decoration: underline !important;
      		}
			.wrap {
				max-width: 536px !important;
				padding: 32px;
			}
   			@media only screen and (max-width:480px) {
      		  .wrap {
				padding: 16px;
      		  }
    	    }`}
    </mj-style>
  </mj-head>
  <mj-body background-color="#F5F5F5">
    <mj-section>
      <mj-column><mj-text>{content}</mj-text> </mj-column>
    </mj-section>
  </mj-body>
</mjml>
