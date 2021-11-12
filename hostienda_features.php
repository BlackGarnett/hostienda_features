<?php 
	if(!defined('_PS_VERSION_')){
		exit();
	}

	/**
	 * 
	 */
	class Hostienda_features extends Module
	{
		
		public function __construct()
		{
			
			$this->name = 'hostienda_features';
            $this->author = 'Grimsley Hostienda';
            $this->tab = 'administration';
            $this->version = '1.0.0';
            $this->need_instance = false;
            $this->bootstrap = true;
            $this->ps_versions_compliancy = array('min' => '1.7', 'max' => _PS_VERSION_);

            parent::__construct();

            $this->displayName = $this->l('Grupo de Características');
            $this->description = $this->l('Módulo para añadir las plantillas de características (WindCenter).');
            $this->confirmUninstall = $this->l('¿Seguro que deseas desinstalar?');
		}

		public function install(){
			if (Shop::isFeatureActive()) {
	        	Shop::setContext(Shop::CONTEXT_ALL);
	    	}

	    	return(

	    		parent::install()
	    		&& $this->registerHook('displayAdminProductsMainStepRightColumnBottom')
	    		&& $this->registerHook('BackOfficeHeader')
	    		
	    	);
		}

		public function hookDisplayAdminProductsMainStepRightColumnBottom() {
			
			return $this->display(__FILE__,'views/templates/hook/hostienda_features.tpl');
		}


		public function hookBackOfficeHeader()
	    {
        
            $this->context->controller->addJS($this->_path.'views/js/hostienda_features.js');
            $this->context->controller->addCSS($this->_path.'views/css/hostienda_features.css');
        
	    }
		public function uninstall(){
			return(
				parent::uninstall()
			);
		}
	}