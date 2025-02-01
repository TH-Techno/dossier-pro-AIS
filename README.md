<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Dossier Professionnel AIS - Cyber Advanced</title>
  <link href="https://fonts.googleapis.com/css?family=Roboto:400,500,700&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <div id="progressContainer">
    <div id="progressBar"></div>
  </div>
  <header>
    <!-- Canvas Three.js pour la scène interactive -->
    <canvas id="three-canvas"></canvas>
    <div class="header-content">
      <h1>Dossier Professionnel AIS</h1>
    </div>
  </header>

   
  <!-- Layout principal à trois colonnes : TOC | Contenu principal | News -->
  <div class="layout">
    <!-- Sidebar gauche : Table des Matières -->
    <aside id="toc">
      <h2>Table des Matières</h2>
    </aside>

    <!-- Contenu principal -->
    <main class="main-content">
      <!-- Activité-Type n° 1 -->
      <section class="section reveal">
        <h2>Activité-Type n° 1 : Administration des Systèmes et Réseaux Sécurisés</h2>
        
        <!-- Exemple 1 -->
        <article class="section">
          <h3 class="collapsible">Exemple n° 1 : Gestion des identités avec Active Directory et Azure AD</h3>
          <div class="section-content">
            <h4>1. Tâches ou opérations effectuées, et dans quelles conditions</h4>
            <p><strong>Contexte et préparation :</strong></p>
            <ul>
              <li>Serveur Windows mis à jour, connexion Internet stable, compte administrateur complet.</li>
            </ul>
            <ol>
              <li><strong>Installation d’AD DS :</strong>
                <ul>
                  <li>Lancer le Server Manager et ajouter le rôle AD DS.</li>
                  <li>Sélectionner "Installation basée sur un rôle" et choisir le serveur local.</li>
                  <li>Installer les fonctionnalités requises.</li>
                </ul>
              </li>
              <li><strong>Promotion en contrôleur :</strong>
                <ul>
                  <li>Choisir "Promouvoir ce serveur", sélectionner "Nouvelle forêt" et renseigner le FQDN (ex. entreprise.local).</li>
                  <li>Définir le mot de passe pour le mode DSRM et installer.</li>
                </ul>
              </li>
              <li><strong>Vérification :</strong>
                <ul>
                  <li>Exécuter <code>Get-ADDomain</code> dans PowerShell en mode administrateur.</li>
                </ul>
              </li>
              <li><strong>Création d’OU :</strong>
                <ul>
                  <li>Créer des OU (Utilisateurs, Groupes, Ordinateurs, Serveurs) dans "Active Directory Users and Computers".</li>
                </ul>
              </li>
              <li><strong>Configuration d’Azure AD Connect :</strong>
                <ul>
                  <li>Télécharger et installer Azure AD Connect (mode "Password Hash Synchronization").</li>
                </ul>
              </li>
              <li><strong>MFA :</strong>
                <ul>
                  <li>Configurer Azure AD Conditional Access pour activer MFA.</li>
                </ul>
              </li>
              <li><strong>Automatisation :</strong>
                <ul>
                  <li>Créer un utilisateur via <code>New-ADUser</code> et configurer via <code>Set-ADUser</code>.</li>
                </ul>
              </li>
              <li><strong>Validation :</strong>
                <ul>
                  <li>Utiliser <code>dcdiag /v</code> et <code>gpresult /R</code> pour valider la configuration.</li>
                </ul>
              </li>
            </ol>
            <h4>2. Moyens utilisés</h4>
            <ul>
              <li><strong>Matériels :</strong> Serveur Windows, connexion Internet.</li>
              <li><strong>Logiciels :</strong> AD DS, Azure AD Connect, PowerShell, GPO, Portail Azure.</li>
              <li><strong>Ressources :</strong> Administrateur expérimenté, documentation technique.</li>
            </ul>
          </div>
        </article>

        <!-- Exemple 2 -->
        <article class="section">
          <h3 class="collapsible">Exemple n° 2 : Sécurisation d’un environnement virtualisé avec Hyper‑V et VMware ESXi</h3>
          <div class="section-content">
            <h4>1. Tâches ou opérations effectuées, et dans quelles conditions</h4>
            <p><strong>Contexte :</strong></p>
            <ul>
              <li>Infrastructure dédiée à la virtualisation, réseau segmenté, accès sécurisé aux consoles.</li>
            </ul>
            <ol>
              <li><strong>Hyper‑V :</strong>
                <ul>
                  <li>Installer Hyper‑V via Server Manager, configurer le commutateur virtuel et créer des VMs.</li>
                </ul>
              </li>
              <li><strong>VMware ESXi :</strong>
                <ul>
                  <li>Télécharger ESXi, installer sur un serveur dédié et configurer via vSphere Client.</li>
                </ul>
              </li>
              <li><strong>Sécurisation :</strong>
                <ul>
                  <li>Appliquer les mises à jour, configurer VLANs/ACL, et restreindre l’accès aux consoles (avec MFA).</li>
                </ul>
              </li>
              <li><strong>Tests :</strong>
                <ul>
                  <li>Vérifier l’isolation des VLANs et surveiller les logs de sécurité.</li>
                </ul>
              </li>
            </ol>
            <h4>2. Moyens utilisés</h4>
            <ul>
              <li><strong>Matériels :</strong> Serveurs physiques et équipements réseau.</li>
              <li><strong>Logiciels :</strong> Hyper‑V, vSphere Client.</li>
              <li><strong>Ressources :</strong> Administrateurs spécialisés, procédures de sécurité.</li>
            </ul>
          </div>
        </article>

        <!-- Exemple 3 -->
        <article class="section">
          <h3 class="collapsible">Exemple n° 3 : Infrastructure Zero Trust</h3>
          <div class="section-content">
            <h4>1. Tâches ou opérations effectuées, et dans quelles conditions</h4>
            <p><strong>Contexte :</strong></p>
            <ul>
              <li>Infrastructure réseau segmentée, collaboration entre IT et sécurité, outils de monitoring déployés.</li>
            </ul>
            <ol>
              <li><strong>Politique Zero Trust :</strong>
                <ul>
                  <li>Rédiger une charte de sécurité et définir des règles d’accès minimales.</li>
                </ul>
              </li>
              <li><strong>Segmentation :</strong>
                <ul>
                  <li>Configurer VLANs, ACL et implémenter la microsegmentation via solutions SDN.</li>
                </ul>
              </li>
              <li><strong>Authentification :</strong>
                <ul>
                  <li>Déployer MFA et configurer des accès conditionnels.</li>
                </ul>
              </li>
              <li><strong>Surveillance :</strong>
                <ul>
                  <li>Installer des outils SIEM/IDS/IPS et réaliser des audits réguliers.</li>
                </ul>
              </li>
            </ol>
            <h4>2. Moyens utilisés</h4>
            <ul>
              <li><strong>Matériels :</strong> Commutateurs, pare-feu, routeurs.</li>
              <li><strong>Logiciels :</strong> Plateformes MFA, outils SIEM/IDS, solutions SDN.</li>
              <li><strong>Ressources :</strong> Administrateurs réseau et sécurité.</li>
            </ul>
          </div>
        </article>
      </section>

      <!-- Activité-Type n° 2 -->
      <section class="section reveal">
        <h2>Activité-Type n° 2 : Gestion des Services et Infrastructures Systèmes</h2>
        <article class="section">
          <h3 class="collapsible">Exemple n° 1 : Mise en place d’un SOC avec SIEM</h3>
          <div class="section-content">
            <h4>1. Tâches ou opérations effectuées, et dans quelles conditions</h4>
            <p><strong>Contexte :</strong></p>
            <ul>
              <li>Centre de données dédié, collecte des logs des systèmes critiques, équipe de sécurité spécialisée.</li>
            </ul>
            <ol>
              <li><strong>Planification :</strong>
                <ul>
                  <li>Définir les objectifs et le périmètre du SOC.</li>
                </ul>
              </li>
              <li><strong>Déploiement du SIEM :</strong>
                <ul>
                  <li>Installer une solution SIEM (Splunk, QRadar, Elastic SIEM) sur un serveur dédié et configurer la collecte des logs.</li>
                </ul>
              </li>
              <li><strong>Alertes & Procédures :</strong>
                <ul>
                  <li>Configurer des règles d’alerte et des notifications (email, SMS) pour la réponse aux incidents.</li>
                </ul>
              </li>
            </ol>
            <h4>2. Moyens utilisés</h4>
            <ul>
              <li><strong>Matériels :</strong> Serveurs dédiés, infrastructure réseau.</li>
              <li><strong>Logiciels :</strong> SIEM, outils de collecte de logs.</li>
              <li><strong>Ressources :</strong> Équipe SOC, documentation d’intervention.</li>
            </ul>
          </div>
        </article>
        <article class="section">
          <h3 class="collapsible">Exemple n° 2 : Architecture de sauvegarde sécurisée avec Air Gap Backup</h3>
          <div class="section-content">
            <h4>1. Tâches ou opérations effectuées, et dans quelles conditions</h4>
            <p><strong>Contexte :</strong></p>
            <ul>
              <li>Infrastructure critique, serveurs de sauvegarde isolés, politique de rétention définie.</li>
            </ul>
            <ol>
              <li><strong>Conception :</strong>
                <ul>
                  <li>Identifier les données critiques et concevoir une architecture hybride (en ligne et hors ligne).</li>
                </ul>
              </li>
              <li><strong>Automatisation :</strong>
                <ul>
                  <li>Configurer un logiciel de sauvegarde (Veeam, Acronis) avec des politiques de rétention.</li>
                </ul>
              </li>
              <li><strong>Sécurisation :</strong>
                <ul>
                  <li>Mettre en place un stockage isolé, appliquer des contrôles d’accès stricts et chiffrer les sauvegardes.</li>
                </ul>
              </li>
            </ol>
            <h4>2. Moyens utilisés</h4>
            <ul>
              <li><strong>Matériels :</strong> Serveurs isolés, dispositifs de stockage sécurisés.</li>
              <li><strong>Logiciels :</strong> Solutions de sauvegarde, outils de chiffrement.</li>
              <li><strong>Ressources :</strong> Équipe IT, procédures documentées.</li>
            </ul>
          </div>
        </article>
        <article class="section">
          <h3 class="collapsible">Exemple n° 3 : Automatisation du déploiement avec Ansible et Terraform</h3>
          <div class="section-content">
            <h4>1. Tâches ou opérations effectuées, et dans quelles conditions</h4>
            <p><strong>Contexte :</strong></p>
            <ul>
              <li>Infrastructure hybride, déploiements reproductibles, collaboration DevOps.</li>
            </ul>
            <ol>
              <li><strong>Installation :</strong>
                <ul>
                  <li>Installer Terraform et Ansible, configurer l’environnement.</li>
                </ul>
              </li>
              <li><strong>Scripts Terraform :</strong>
                <ul>
                  <li>Créer un fichier <code>main.tf</code> pour définir l’infrastructure (ex. AWS) :</li>
                  <pre><code>provider "aws" {
  region = "eu-west-1"
}

resource "aws_instance" "web" {
  ami           = "ami-0abcdef1234567890"
  instance_type = "t2.micro"
  tags = {
    Name = "WebServer"
  }
}</code></pre>
                  <li>Initialiser, planifier et appliquer avec <code>terraform init</code>, <code>terraform plan</code> et <code>terraform apply</code>.</li>
                </ul>
              </li>
              <li><strong>Configuration Ansible :</strong>
                <ul>
                  <li>Créer un inventaire (<code>hosts</code>) et un playbook (<code>deploy.yml</code>) pour configurer les serveurs :</li>
                  <pre><code>[webservers]
192.168.1.10</code></pre>
                  <pre><code>---
- name: Configurer les serveurs Web
  hosts: webservers
  become: yes
  tasks:
    - name: Installer Apache
      apt:
        name: apache2
        state: present
        update_cache: yes
    - name: Démarrer Apache
      service:
        name: apache2
        state: started
        enabled: yes</code></pre>
                  <li>Exécuter avec <code>ansible-playbook -i hosts deploy.yml</code>.</li>
                </ul>
              </li>
            </ol>
            <h4>2. Moyens utilisés</h4>
            <ul>
              <li><strong>Matériels :</strong> Machines physiques ou virtuelles, environnement CI/CD.</li>
              <li><strong>Logiciels :</strong> Terraform, Ansible, Git.</li>
              <li><strong>Ressources :</strong> Équipe DevOps, documentation technique.</li>
            </ul>
          </div>
        </article>
      </section>

      <!-- Activité-Type n° 3 -->
      <section class="section reveal">
        <h2>Activité-Type n° 3 : Sécurisation et Optimisation des Réseaux</h2>
        <article class="section">
          <h3 class="collapsible">Exemple n° 1 : Réseau Zero Trust avec segmentation et microsegmentation</h3>
          <div class="section-content">
            <h4>1. Tâches ou opérations effectuées, et dans quelles conditions</h4>
            <p><strong>Contexte :</strong></p>
            <ul>
              <li>Réseau d’entreprise nécessitant renforcement, accès restreint aux équipements, collaboration entre IT et sécurité.</li>
            </ul>
            <ol>
              <li><strong>Audit :</strong>
                <ul>
                  <li>Cartographier le réseau, identifier segments et flux, documenter les ressources critiques.</li>
                </ul>
              </li>
              <li><strong>Politique Zero Trust :</strong>
                <ul>
                  <li>Rédiger une charte de sécurité et définir des règles d’accès minimales.</li>
                </ul>
              </li>
              <li><strong>Segmentation :</strong>
                <ul>
                  <li>Configurer VLANs, ACL et appliquer la microsegmentation via SDN.</li>
                </ul>
              </li>
              <li><strong>Authentification :</strong>
                <ul>
                  <li>Déployer MFA et configurer des accès conditionnels.</li>
                </ul>
              </li>
              <li><strong>Surveillance :</strong>
                <ul>
                  <li>Installer des outils SIEM/IDS/IPS et configurer des alertes pour toute anomalie.</li>
                </ul>
              </li>
            </ol>
            <h4>2. Moyens utilisés</h4>
            <ul>
              <li><strong>Matériels :</strong> Commutateurs, pare-feu, routeurs.</li>
              <li><strong>Logiciels :</strong> Plateformes MFA, outils SIEM/IDS, solutions SDN.</li>
              <li><strong>Ressources :</strong> Administrateurs réseau et sécurité.</li>
            </ul>
          </div>
        </article>
        <article class="section">
          <h3 class="collapsible">Exemple n° 2 : Déploiement d’une solution de détection d’intrusion (NIDS et HIDS)</h3>
          <div class="section-content">
            <h4>1. Tâches ou opérations effectuées, et dans quelles conditions</h4>
            <p><strong>Contexte :</strong></p>
            <ul>
              <li>Infrastructure nécessitant une surveillance en temps réel, accès aux logs et détection d'intrusion.</li>
            </ul>
            <ol>
              <li><strong>Sélection :</strong>
                <ul>
                  <li>Choisir des solutions adaptées : NIDS (Snort, Suricata) et HIDS (OSSEC, Wazuh).</li>
                </ul>
              </li>
              <li><strong>Déploiement :</strong>
                <ul>
                  <li>Installer NIDS sur un serveur dédié en mode span, déployer les agents HIDS sur les serveurs critiques.</li>
                </ul>
              </li>
              <li><strong>Intégration SIEM :</strong>
                <ul>
                  <li>Rediriger les alertes vers une plateforme SIEM pour corréler les événements.</li>
                </ul>
              </li>
              <li><strong>Tests :</strong>
                <ul>
                  <li>Simuler des attaques pour vérifier la réactivité du système.</li>
                </ul>
              </li>
            </ol>
            <h4>2. Moyens utilisés</h4>
            <ul>
              <li><strong>Matériels :</strong> Serveurs/appliances pour NIDS, agents HIDS.</li>
              <li><strong>Logiciels :</strong> Snort/Suricata, OSSEC/Wazuh, plateforme SIEM.</li>
              <li><strong>Ressources :</strong> Analystes sécurité, procédures d'intervention.</li>
            </ul>
          </div>
        </article>
        <article class="section">
          <h3 class="collapsible">Exemple n° 3 : Optimisation de la performance réseau avec SNMP et NetFlow</h3>
          <div class="section-content">
            <h4>1. Tâches ou opérations effectuées, et dans quelles conditions</h4>
            <p><strong>Contexte :</strong></p>
            <ul>
              <li>Réseau multi-équipements nécessitant une surveillance fine et optimisation de la bande passante.</li>
            </ul>
            <ol>
              <li><strong>Configuration SNMP :</strong>
                <ul>
                  <li>Activer SNMP sur chaque équipement et configurer les communautés.</li>
                  <li>Déployer un outil de monitoring (Zabbix, PRTG, Nagios).</li>
                </ul>
              </li>
              <li><strong>NetFlow :</strong>
                <ul>
                  <li>Activer NetFlow sur les équipements compatibles et configurer l’exportation vers un collecteur (ex. SolarWinds).</li>
                </ul>
              </li>
              <li><strong>Analyse :</strong>
                <ul>
                  <li>Générer des rapports pour identifier les goulets d’étranglement et ajuster la configuration (QoS, routes).</li>
                </ul>
              </li>
            </ol>
            <h4>2. Moyens utilisés</h4>
            <ul>
              <li><strong>Matériels :</strong> Équipements réseau compatibles SNMP/NetFlow, serveurs de monitoring.</li>
              <li><strong>Logiciels :</strong> Outils SNMP (Zabbix, PRTG), solutions NetFlow, scripts d’automatisation.</li>
              <li><strong>Ressources :</strong> Administrateurs réseau, ingénieurs systèmes.</li>
            </ul>
          </div>
        </article>
      </section>

      <!-- Conclusion -->
      <section class="section reveal">
        <h1>Conclusion</h1>
        <p>
          Je soussigné(e) Tommy HAUTEMER, déclare sur l’honneur que les renseignements fournis dans ce dossier sont exacts et que je suis l’auteur(e) des réalisations jointes.
        </p>
        <p>
          Fait à Magny Les Hameaux le 23/01/2025.
        </p>
        <div class="signature">
          <p>Signature :</p>
          <img src="signature.png" alt="Signature de Tommy HAUTEMER">
        </div>
      </section>
    </main>
    <!-- Sidebar droite : News -->
    <aside class="sidebar-right">
      <!-- Bloc News Collapsible -->
      <div id="news">
        <h2 class="collapsible">Dernières News IT</h2>
        <div class="news-content">
          <div id="news-container">
            <p>Chargement des news...</p>
          </div>
        </div>
      </div>
  <!-- Bouton "Scroll to Top" -->
  <button id="scrollToTopBtn">↑ Top</button>
  </div>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js"></script>
 <script src="script.js"></script>
</body>
</html>
